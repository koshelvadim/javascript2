import React from 'react'
import Button from './Button';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/slices/todoSlice';

const TodoItem = ({id, text}) => {

  const dispatch = useDispatch();

  const deleteItem = () => {
      dispatch(deleteTodo(id))
  }

  return (
    <div>
      <p>{text}</p>
      <Button handlerClick={deleteItem} >Удалить</Button>
    </div>
  )
}

export default TodoItem;