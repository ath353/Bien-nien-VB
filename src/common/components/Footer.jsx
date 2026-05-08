import { APP_CONFIG } from "../../constants/appConfig";

export default function Footer() {
  return (
    <footer className="border-t border-stone-800 mt-20 py-10 text-center">
      <p className="font-serif text-lg text-stone-500 italic">"{APP_CONFIG.tagline}"</p>
      <p className="mt-3 text-xs text-stone-600">
        © {new Date().getFullYear()} {APP_CONFIG.name} · Lịch sử thuộc về tất cả mọi người
      </p>
    </footer>
  );
}
