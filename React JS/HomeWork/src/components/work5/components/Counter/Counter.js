import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../store/counterReducer";

export const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <p>Counter: {count}</p>
      <button
        onClick={() => {
          dispatch(increment());
        }}>
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}>
        -
      </button>
    </>
  );
};
