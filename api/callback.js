export default async function handler(req, res) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).send("Thiếu authorization code.");
  }

  const clientId = process.env.OAUTH_CLIENT_ID;
  const clientSecret = process.env.OAUTH_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return res.status(500).send("OAuth chưa được cấu hình.");
  }

  try {
    const tokenRes = await fetch(
      "https://github.com/login/oauth/access_token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          client_id: clientId,
          client_secret: clientSecret,
          code,
        }),
      }
    );

    const tokenData = await tokenRes.json();

    if (tokenData.error) {
      const msg = JSON.stringify({ error: tokenData.error });
      return res.send(buildScript("error", msg));
    }

    const payload = JSON.stringify({
      token: tokenData.access_token,
      provider: "github",
    });
    return res.send(buildScript("success", payload));
  } catch (err) {
    return res.status(500).send("Lỗi khi lấy access token.");
  }
}

function buildScript(status, payload) {
  return `<!DOCTYPE html>
<html>
<body>
<script>
  (function() {
    function sendMsg() {
      window.opener.postMessage(
        'authorization:github:${status}:${payload}',
        '*'
      );
    }
    window.addEventListener('message', function(e) {
      if (e.data === 'authorizing:github') sendMsg();
    });
    window.opener.postMessage('authorizing:github', '*');
  })();
</script>
</body>
</html>`;
}
