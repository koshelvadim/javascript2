import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { deleteItem } from "../redux/slices/favoritesSlice";

function FavoriteList({products}) {

  const favorite = useSelector((state) => state.favorite);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Избранное</h2>
    <ul>
      {products
      .filter((product) => favorite.items.includes(product.id))
      .map(({ id, name, description, price }) => { 
        return (<li key={id}>
                  <h3>{name}</h3>
                  <p>{description}</p>
                  <p>{price}</p>
                  <Button handlerClick={ () => dispatch(deleteItem(id))}>удалить</Button>
                </li>)
         })}
    </ul>
    </div>
  );
}

export default FavoriteList;
