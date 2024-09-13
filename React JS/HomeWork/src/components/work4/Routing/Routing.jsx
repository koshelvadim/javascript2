import { BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import ArticleList from "./ArticleList";
import ArticleDetail from "./ArticleDetail";

const articles = [
  { id: 1, title: "Статья 1", content: "Содержимое статьи 1" },
  { id: 2, title: "Статья 2", content: "Содержимое статьи 2" },
  { id: 3, title: "Статья 3", content: "Содержимое статьи 3" },
];

// const products = [];

const Routing = () => (
  <Router>
    <div>
      <h1>Приложение для просмотра статей</h1>
      <Routes>
        {/* <Route path="/" element={<ArticleList articles={articles} />} /> */}
        <Route path="/articles/:id" element={<ArticleDetail articles={articles} />} />
        <Route path="*" element={<ArticleList articles={articles} />} />
      </Routes>
    </div>
  </Router>
);

export default Routing;
