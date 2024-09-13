import { useParams } from "react-router-dom";

const DetailPage = ({ goods }) => {
  const { id } = useParams();
  const good = goods.find(good => good.id === parseInt(id));

  if(!good) {
    return <div>Телефон не найдена</div>;
  }

  return (
    <div>
      <h2>Название: {good.title}</h2>
      <h3>Стоимость: {good.price}</h3>
    </div>
  );
};

export default DetailPage;