import React from 'react';
import { FilterProvider } from './contexts/FilterContext';
import AddTodo from './components/AddTodo';
import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';
import { Provider } from 'react-redux';
import { store } from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <FilterProvider>
        <AddTodo />
        <TodoFilter />
        <TodoList />
      </FilterProvider>
    </Provider>
  )
}

export default App;