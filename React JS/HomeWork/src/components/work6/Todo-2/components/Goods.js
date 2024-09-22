import { useDispatch } from "react-redux";
import Button from "./Button";
import { addItem } from "../redux/slices/favoritesSlice";

function Goods({products}) {

  const dispatch = useDispatch();

  return (
    <ul>
      {products.map(({ id, name, description, price }) => (
        <li key={id}>
          <h3>{name}</h3>
          <p>{description}</p>
          <p>{price}</p>
          <Button handlerClick={ () => dispatch(addItem(id))}>в избранное</Button>
        </li>
      ))}
    </ul>
  );
}

export default Goods;
