import React from 'react'
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

const TodoList = () => {

  const todo = useSelector((state) => state.todo);
  console.log(todo);
  

  return (
    <ul>
      {todo.items.map(item => <li key={item.id}>
        <TodoItem {...item}/>
      </li>)}
    </ul>
  )
}

export default TodoList;