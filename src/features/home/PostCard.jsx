import { Link } from "react-router-dom";
import Tag from "../../common/components/Tag";
import { formatDate } from "../../common/utils/formatDate";

export default function PostCard({ post }) {
  return (
    <Link
      to={`/bai-viet/${post.slug}`}
      className="group block rounded-lg border border-stone-800 bg-stone-900/50 overflow-hidden hover:border-amber-900/60 transition-all duration-300 hover:bg-stone-900"
    >
      {/* Thumbnail */}
      {post.thumbnail && (
        <div className="aspect-[16/9] overflow-hidden bg-stone-800">
          <img
            src={post.thumbnail}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
          />
        </div>
      )}

      {/* Nếu không có thumbnail thì hiện placeholder */}
      {!post.thumbnail && (
        <div className="aspect-[16/9] bg-gradient-to-br from-stone-800 to-stone-900 flex items-center justify-center">
          <span className="text-4xl opacity-30">📜</span>
        </div>
      )}

      <div className="p-5">
        <div className="mb-3">
          <Tag label={post.category} />
        </div>

        <h2 className="font-serif text-lg font-semibold text-parchment leading-snug group-hover:text-amber-400 transition-colors mb-2">
          {post.title}
        </h2>

        {post.excerpt && (
          <p className="text-sm text-stone-400 leading-relaxed line-clamp-2 mb-4">
            {post.excerpt}
          </p>
        )}

        <div className="flex items-center justify-between text-xs text-stone-500">
          <span>{formatDate(post.date)}</span>
          <span>{post.readTime} phút đọc</span>
        </div>
      </div>
    </Link>
  );
}
