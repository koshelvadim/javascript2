import todosReducer from "../reducers/todosReducer";
import { configureStore } from "@reduxjs/toolkit";

// Хранилище - объект, который содержит состояние приложения и методы для его изменения
export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
