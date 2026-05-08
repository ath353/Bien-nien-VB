export default function handler(req, res) {
  const proto = req.headers["x-forwarded-proto"] || "https";
  const host = req.headers["x-forwarded-host"] || req.headers.host;
  const redirectUri = `${proto}://${host}/api/callback`;

  const clientId = process.env.OAUTH_CLIENT_ID;
  if (!clientId) {
    return res.status(500).send("OAUTH_CLIENT_ID chưa được cấu hình.");
  }

  const params = new URLSearchParams({
    client_id: clientId,
    scope: "repo,user",
    redirect_uri: redirectUri,
  });

  res.redirect(`https://github.com/login/oauth/authorize?${params}`);
}
