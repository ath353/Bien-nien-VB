// Dùng Vite's import.meta.glob để đọc tất cả file .md lúc build
const postFiles = import.meta.glob("../../posts/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

/**
 * Parse frontmatter thủ công — không dùng gray-matter để tránh lỗi browser
 */
function parseFrontmatter(rawContent) {
  const match = rawContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, content: rawContent.trim() };

  const frontmatterStr = match[1];
  const content = match[2].trim();
  const data = {};

  frontmatterStr.split("\n").forEach((line) => {
    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) return;

    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();

    // Mảng: [item1, item2]
    if (value.startsWith("[") && value.endsWith("]")) {
      value = value
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
    }
    // Số
    else if (value !== "" && !isNaN(value)) {
      value = Number(value);
    }
    // Xóa dấu nháy khỏi string
    else if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    data[key] = value;
  });

  return { data, content };
}

/**
 * Parse một file markdown thành post object
 */
function parsePost(rawContent, filePath) {
  const { data, content } = parseFrontmatter(rawContent);

  // Lấy slug từ đường dẫn: ../../posts/ten-bai.md → ten-bai
  const slug =
    data.slug ||
    filePath
      .split("/")
      .pop()
      .replace(/\.md$/, "");

  return {
    slug,
    title: data.title ?? "Không có tiêu đề",
    date: data.date ?? "",
    category: data.category ?? "Chưa phân loại",
    tags: Array.isArray(data.tags) ? data.tags : [],
    excerpt: data.excerpt ?? "",
    thumbnail: data.thumbnail || null,
    readTime: data.readTime ?? 5,
    content,
  };
}

/**
 * Lấy tất cả bài viết, sắp xếp theo ngày mới nhất
 */
export function getAllPosts() {
  return Object.entries(postFiles)
    .map(([filePath, rawContent]) => parsePost(rawContent, filePath))
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

/**
 * Lấy một bài viết theo slug
 */
export function getPostBySlug(slug) {
  return getAllPosts().find((post) => post.slug === slug) ?? null;
}
