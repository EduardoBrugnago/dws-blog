import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import PostPage from "../pages/PostPage/PostPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/post/:id" element={<PostPage />} />
    </Routes>
  );
}
