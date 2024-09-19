import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTodo } from '../actions/todoActions';
import { FilterContext } from '../contexts/FilterContext';
import withFilter from '../hoc/withFilter';


const TodoList = () => {
  // Получаем список задач из Redux хранилища
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const { filter } = useContext(FilterContext);

  // Применяем фильтр к задачам
  const filtredTodos = withFilter(todos, filter);
  
  const handleToggleTodo = (id) => {
    // Действие для изменения статуса
    dispatch(toggleTodo(id));
  }

  return (
    <ul>
      {filtredTodos.map(todo => (
        <li
          key={todo.id}
          onClick={() => handleToggleTodo(todo.id)}
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  )
}

export default TodoList;