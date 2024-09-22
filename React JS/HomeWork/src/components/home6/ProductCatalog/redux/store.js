import { configureStore } from "@reduxjs/toolkit";
// import productReducer from "./productSlice";
import productSlice from "./productSlice";

export const store = configureStore({
  reducer: {
    products: productSlice,
  },
});
