import { useState } from "react"
import Button from "./Button"
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";

const Form = () => {

  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  // const handlerChange = (e) => {
  //   setValue(e.target.value)
  // }
  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(value));
    setValue('');
  }

  return (
    <form onSubmit={handlerSubmit}>
      <input />
      <Button>Добавить</Button>
    </form>
  );
}

export default Form