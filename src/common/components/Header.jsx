import { Link, NavLink } from "react-router-dom";
import { APP_CONFIG } from "../../constants/appConfig";

export default function Header() {
  return (
    <header className="border-b border-stone-800 bg-stone-950/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="mx-auto max-w-4xl px-5 py-4 flex items-center justify-between">
        <Link to="/" className="group">
          <h1 className="font-serif text-xl font-bold text-parchment tracking-wide group-hover:text-amber-400 transition-colors">
            {APP_CONFIG.name}
          </h1>
          <p className="text-xs text-stone-500 mt-0.5 hidden sm:block">{APP_CONFIG.tagline}</p>
        </Link>

        <nav className="flex items-center gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `text-sm transition-colors ${
                isActive ? "text-amber-400" : "text-stone-400 hover:text-parchment"
              }`
            }
          >
            Trang chủ
          </NavLink>
          <NavLink
            to="/gioi-thieu"
            className={({ isActive }) =>
              `text-sm transition-colors ${
                isActive ? "text-amber-400" : "text-stone-400 hover:text-parchment"
              }`
            }
          >
            Giới thiệu
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
