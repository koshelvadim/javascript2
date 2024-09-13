import { useParams } from "react-router-dom";

const ArticleDetail = ({ articles}) => {
  const { id } = useParams();
  const article = articles.find(article => article.id === parseInt(id));

  if(!article) {
    return <div>Статья не найдена</div>;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
    </div>
  );
};

export default ArticleDetail;