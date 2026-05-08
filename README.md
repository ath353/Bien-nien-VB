# 📜 Biên Niên

> *Lịch sử được kể như chưa từng được kể*

Blog kể chuyện lịch sử theo phong cách narrative — không khô khan như sách giáo khoa, không vội vã như tin tức. Mỗi bài viết là một câu chuyện được nghiên cứu kỹ và kể lại bằng ngôn ngữ của thời đại hôm nay.

🔗 **Demo:** [biennien.vercel.app](https://biennien.vercel.app)

---

## ✨ Tính năng

| Tính năng | Mô tả |
|---|---|
| 📖 Blog tĩnh | Bài viết dạng Markdown, load cực nhanh |
| 🎨 Giao diện dark | Serif font + gold accent, aesthetic cổ điển |
| 🔍 Đọc bài đầy đủ | Route `/bai-viet/:slug` cho từng bài |
| 🏷️ Phân loại | Category tag cho mỗi bài viết |
| 📱 Responsive | Tương thích mọi thiết bị |
| ✏️ Admin CMS | Quản lý bài viết qua giao diện web tại `/admin` |

---

## 🛠️ Tech Stack

- **Frontend:** React 18 + Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router v6
- **Markdown:** react-markdown + remark-gfm
- **CMS:** Decap CMS (GitHub backend)
- **Deploy:** Vercel

---

## 🚀 Chạy local

```bash
# Clone repo
git clone https://github.com/ath353/Bien-nien-VB.git
cd Bien-nien-VB

# Cài dependencies
npm install

# Chạy dev server
npm run dev
```

Mở [http://localhost:5173](http://localhost:5173)

---

## ✍️ Viết bài mới

### Cách 1: Qua Admin CMS (khuyên dùng)

Vào `https://biennien.vercel.app/admin` → đăng nhập GitHub → soạn bài → Publish.

### Cách 2: Tạo file Markdown thủ công

Tạo file `.md` trong `src/posts/` với frontmatter:

```markdown
---
title: "Tiêu đề bài viết"
slug: ten-bai-viet
date: 2024-01-20
category: Lịch sử Việt Nam
tags: [tag1, tag2]
excerpt: Tóm tắt ngắn hiển thị trên trang chủ.
readTime: 8
thumbnail: /images/ten-anh.jpg
---

Nội dung bài viết ở đây...
```

---

## 📁 Cấu trúc dự án

```
src/
├── posts/              # Bài viết dạng .md
├── features/
│   ├── home/           # Trang chủ + PostCard
│   ├── post/           # Trang đọc bài
│   └── about/          # Trang giới thiệu
├── common/
│   ├── components/     # Header, Footer, Tag
│   └── utils/          # getPosts, formatDate
└── constants/          # appConfig
public/
└── admin/              # Decap CMS
api/
├── auth.js             # OAuth handler
└── callback.js         # OAuth callback
```

---

## 📝 Danh mục bài viết

- 🇻🇳 Lịch sử Việt Nam
- 🌍 Đế chế & Quốc gia
- 🏢 Thương hiệu & Công ty
- ⚽ Thể thao & CLB
- 📅 Sự kiện lịch sử

---

*Built with ❤️ by [@ath353](https://github.com/ath353)*
