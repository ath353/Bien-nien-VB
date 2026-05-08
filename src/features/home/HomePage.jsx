import { getAllPosts } from "../../common/utils/getPosts";
import PostCard from "./PostCard";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-4xl px-5 py-12">
      {/* Hero */}
      <div className="mb-14 text-center">
        <p className="font-serif text-stone-500 italic text-sm mb-3 tracking-widest uppercase">
          Biên Niên
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-parchment leading-tight mb-4">
          Lịch sử được kể<br />
          <span className="text-amber-500">như chưa từng được kể</span>
        </h1>
        <p className="text-stone-400 max-w-xl mx-auto leading-relaxed">
          Những câu chuyện về các quốc gia, triều đại, thương hiệu và sự kiện
          đã làm thay đổi thế giới — được kể lại theo cách bạn chưa từng đọc.
        </p>
      </div>

      {/* Danh sách bài viết */}
      {posts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-stone-500 font-serif italic text-lg">
            Những câu chuyện đang được viết...
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
