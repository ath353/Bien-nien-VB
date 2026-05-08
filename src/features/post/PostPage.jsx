import { useParams, Link, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPostBySlug } from "../../common/utils/getPosts";
import { formatDate } from "../../common/utils/formatDate";
import Tag from "../../common/components/Tag";

export default function PostPage() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) return <Navigate to="/" replace />;

  return (
    <article className="mx-auto max-w-2xl px-5 py-12">
      {/* Breadcrumb */}
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-amber-400 transition-colors mb-10"
      >
        ← Trang chủ
      </Link>

      {/* Header bài viết */}
      <header className="mb-10">
        <div className="mb-4 flex items-center gap-3">
          <Tag label={post.category} />
          {post.tags.slice(0, 2).map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        <h1 className="font-serif text-3xl md:text-4xl font-bold text-parchment leading-tight mb-5">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-sm text-stone-500 border-b border-stone-800 pb-8">
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span>{post.readTime} phút đọc</span>
        </div>
      </header>

      {/* Thumbnail */}
      {post.thumbnail && (
        <div className="mb-10 rounded-lg overflow-hidden">
          <img
            src={post.thumbnail}
            alt={post.title}
            className="w-full object-cover opacity-90"
          />
        </div>
      )}

      {/* Nội dung bài viết */}
      <div className="prose-biennien space-y-5">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>

      {/* Footer bài viết */}
      <div className="mt-16 pt-8 border-t border-stone-800 text-center">
        <p className="font-serif italic text-stone-500 text-sm mb-4">
          — Biên Niên —
        </p>
        <Link
          to="/"
          className="inline-block text-sm text-amber-500 hover:text-amber-400 transition-colors"
        >
          ← Xem thêm bài viết khác
        </Link>
      </div>
    </article>
  );
}
