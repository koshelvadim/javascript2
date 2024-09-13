import { Link } from "react-router-dom"

const ListPage = ({ goods }) => {
  console.log(goods);
  
  return (
    <div>
        <h2>Список телефонов:</h2>
        <ul>
            {goods.map(good => (
                <li key={good.id}>
                    <Link to={`/goods/${good.id}`}>{good.title}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ListPage;