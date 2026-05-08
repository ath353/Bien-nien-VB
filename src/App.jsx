import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./common/components/Header";
import Footer from "./common/components/Footer";
import HomePage from "./features/home/HomePage";
import PostPage from "./features/post/PostPage";
import AboutPage from "./features/about/AboutPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bai-viet/:slug" element={<PostPage />} />
            <Route path="/gioi-thieu" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
