import { Link } from "react-router-dom";
import { APP_CONFIG } from "../../constants/appConfig";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-12">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-amber-400 transition-colors mb-10"
      >
        ← Trang chủ
      </Link>

      <h1 className="font-serif text-4xl font-bold text-parchment mb-2">
        {APP_CONFIG.name}
      </h1>
      <p className="font-serif italic text-amber-500 mb-10">
        "{APP_CONFIG.tagline}"
      </p>

      <div className="space-y-6 text-stone-400 leading-relaxed">
        <p>
          <strong className="text-parchment">Biên Niên</strong> là nơi lịch sử
          được kể lại theo cách khác — không khô khan như sách giáo khoa, không
          vội vã như tin tức. Mỗi bài viết là một câu chuyện được nghiên cứu kỹ
          và kể lại bằng ngôn ngữ của thời đại hôm nay.
        </p>

        <p>
          Chúng tôi tin rằng lịch sử không thuộc về những người có bằng cấp —
          lịch sử thuộc về tất cả mọi người. Và cách tốt nhất để hiểu thế giới
          hôm nay là biết thế giới đã đến đây như thế nào.
        </p>

        <p>
          Từ sự trỗi dậy của các đế chế đến câu chuyện đằng sau một thương hiệu
          xe hơi, từ những trận dịch làm thay đổi lịch sử đến hành trình của
          một câu lạc bộ bóng đá — tất cả đều có câu chuyện đáng được kể.
        </p>

        <div className="border-t border-stone-800 pt-6 mt-8">
          <p className="font-serif italic text-stone-500">
            "Những ai không biết lịch sử thì bị kết án phải lặp lại nó."
          </p>
          <p className="text-sm text-stone-600 mt-2">— George Santayana</p>
        </div>
      </div>
    </div>
  );
}
