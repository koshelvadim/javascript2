import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice"
import favoriteReducer from "./slices/favoritesSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    favorite: favoriteReducer,
  },
});

export default store;