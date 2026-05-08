/**
 * Format ngày theo kiểu tiếng Việt
 * @param {string} dateStr - YYYY-MM-DD
 * @returns {string} - "10 tháng 5, 2024"
 */
export function formatDate(dateStr) {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("vi-VN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
