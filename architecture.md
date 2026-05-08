# ARCHITECTURE.md — BienNien

> Blog kể chuyện lịch sử theo phong cách narrative — lịch sử các quốc gia, triều đại, thương hiệu, sự kiện thế giới.
> Viết bằng tiếng Việt, phong cách tối cổ điển, font Serif.
> Static site — không có backend, không có database.

---

## 1. Tổng quan dự án

**Định nghĩa:** BienNien là blog kể chuyện lịch sử theo phong cách hấp dẫn, dễ đọc — không khô khan như sách giáo khoa. Mỗi bài viết là một câu chuyện được kể lại từ góc nhìn hiện đại.

**Vấn đề giải quyết:**
- Lịch sử thường bị kể khô khan, khó tiếp cận với người trẻ
- Thiếu nền tảng tiếng Việt kể chuyện lịch sử theo phong cách narrative
- Người đọc muốn hiểu bối cảnh lịch sử của những thứ xung quanh (thương hiệu, CLB, quốc gia) nhưng không biết đọc ở đâu

**Target user:**
- Người trẻ VN thích đọc câu chuyện hấp dẫn
- Fan bóng đá muốn hiểu lịch sử CLB yêu thích
- Người mê tìm hiểu về các thương hiệu, đất nước, triều đại

**Chủ đề bao gồm:**
- Lịch sử các quốc gia, triều đại (VN và thế giới)
- Lịch sử thương hiệu, công ty nổi tiếng
- Lịch sử CLB bóng đá, thể thao
- Các sự kiện lớn trong lịch sử nhân loại (dịch bệnh, chiến tranh, khám phá...)

**Core value proposition:**
- Lịch sử kể như truyện — cuốn hút, dễ đọc
- Không cần đăng ký, đọc ngay
- Giao diện tối cổ điển, sang trọng như đọc sách

---

## 2. Triết lý thiết kế

```
Nội dung > Kỹ thuật
Đơn giản > Phức tạp
Tốc độ   > Tính năng
```

- Mỗi bài viết là 1 file Markdown — viết bài mới không cần động vào code
- Không có backend, không có database — bề mặt tấn công = 0
- Static site — chịu tải vô hạn nhờ Vercel CDN
- Font Serif + nền tối = trải nghiệm đọc như sách cổ điển

---

## 3. Tech Stack

| Layer        | Technology              | Lý do                                        |
|--------------|-------------------------|----------------------------------------------|
| Frontend     | React 18 + Vite         | Nhanh, nhẹ, ecosystem tốt                    |
| Styling      | TailwindCSS             | Responsive nhanh, dark theme dễ              |
| Routing      | React Router v6         | Điều hướng giữa trang chủ và bài viết        |
| Markdown     | react-markdown + gray-matter | Parse file .md thành HTML                |
| Font         | Playfair Display (Serif) | Cổ điển, sang trọng, phù hợp lịch sử        |
| Deploy       | Vercel                  | Free, auto deploy, CDN toàn cầu              |

> **Không có backend** — toàn bộ chạy client-side.
> **Không có database** — bài viết là file Markdown tĩnh.

---

## 4. Cấu trúc thư mục

```
bien-nien/
├── src/
│   ├── posts/                          # Tất cả bài viết
│   │   ├── nhat-ban-vuon-len-tu-tro-tan/
│   │   │   ├── index.md               # Nội dung bài viết
│   │   │   └── thumbnail.jpg          # Ảnh đại diện
│   │   ├── trieu-nha-tran/
│   │   │   ├── index.md
│   │   │   └── thumbnail.jpg
│   │   └── ...
│   │
│   ├── features/
│   │   ├── home/
│   │   │   ├── HomePage.jsx           # Trang chủ — danh sách bài
│   │   │   └── PostCard.jsx           # Card preview từng bài
│   │   ├── post/
│   │   │   └── PostPage.jsx           # Trang chi tiết bài viết
│   │   └── about/
│   │       └── AboutPage.jsx          # Trang giới thiệu
│   │
│   ├── common/
│   │   ├── components/
│   │   │   ├── Header.jsx             # Header + navigation
│   │   │   ├── Footer.jsx             # Footer + link mạng xã hội
│   │   │   └── Tag.jsx                # Tag phân loại bài viết
│   │   └── utils/
│   │       ├── getPosts.js            # Đọc và parse tất cả file .md
│   │       └── formatDate.js          # Format ngày đăng
│   │
│   ├── constants/
│   │   └── appConfig.js              # Config toàn app
│   │
│   ├── App.jsx                        # Router chính
│   ├── main.jsx
│   └── index.css                      # Global styles + font
│
├── public/
│   └── favicon.svg
│
├── vercel.json                        # Security headers + SPA redirect
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── architecture.md
```

---

## 5. Cấu trúc file Markdown (frontmatter)

Mỗi bài viết có phần metadata ở đầu file:

```markdown
---
title: "Nhật Bản vươn lên từ tro tàn như thế nào"
date: "2024-05-10"
category: "Lịch sử thế giới"
tags: ["Nhật Bản", "Thế chiến II", "Kinh tế"]
excerpt: "Từ đống tro tàn sau Thế chiến II, Nhật Bản đã làm điều mà cả thế giới gọi là kỳ tích..."
thumbnail: "./thumbnail.jpg"
readTime: 8
---

Nội dung bài viết ở đây...
```

---

## 6. Luồng hoạt động

```
[1] Build time
    Vite đọc tất cả file .md trong src/posts/
    → gray-matter parse frontmatter (title, date, category...)
    → Tạo danh sách bài viết

[2] Trang chủ
    HomePage.jsx hiển thị danh sách PostCard
    → Sắp xếp theo ngày mới nhất
    → Click vào card → chuyển đến PostPage

[3] Trang bài viết
    PostPage.jsx đọc file .md theo slug URL
    → react-markdown render nội dung thành HTML
    → Hiển thị với typography Serif đẹp
```

---

## 7. Routing

```
/                    → Trang chủ (danh sách bài)
/bai-viet/:slug      → Chi tiết bài viết
/gioi-thieu          → Trang About
```

---

## 8. Constants — appConfig.js

```javascript
export const APP_CONFIG = {
  name: "Biên Niên",
  tagline: "Lịch sử được kể như chưa từng được kể",
  url: "https://biennien.vercel.app",
  author: "BienNien",

  categories: [
    "Lịch sử Việt Nam",
    "Lịch sử thế giới",
    "Thương hiệu & Công ty",
    "Thể thao & CLB",
    "Sự kiện lịch sử",
  ],

  social: {
    facebook: "",   // Thêm sau
  },

  postsPerPage: 9,
};
```

---

## 9. Bảo mật

> Static site — không có backend, không database — bề mặt tấn công gần như bằng 0.

- HTTPS tự động qua Vercel
- Security headers đầy đủ trong vercel.json
- Không có form, không có user input → không có XSS/injection risk

---

## 10. SEO

Mỗi bài viết có:
- `<title>` riêng từ frontmatter
- `<meta description>` từ excerpt
- URL thân thiện theo slug (`/bai-viet/nhat-ban-vuon-len-tu-tro-tan`)
- `sitemap.xml` để Google index nhanh
- Open Graph tags để share đẹp trên Facebook

---

## 11. Monetize Roadmap

```
v1 — Launch
  → Viết 10–20 bài chất lượng
  → Share lên Facebook Page cùng tên

v2 — Có traffic
  → Đăng ký Google AdSense
  → Thêm affiliate link vào bài phù hợp

v3 — Có audience trung thành
  → Bán ebook tuyển tập bài hay
  → Sponsored content
  → Patreon / ủng hộ tự nguyện
```

---

## 12. Checklist trước khi ship v1

```
□ Trang chủ hiển thị danh sách bài đúng
□ Trang bài viết render Markdown đúng
□ Font Playfair Display load đẹp
□ Responsive trên mobile
□ Dark theme nhất quán
□ SEO meta tags đúng
□ Vercel deploy thành công
□ Test trên Chrome, Safari, Firefox
```
