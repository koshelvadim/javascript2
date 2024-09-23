import { configureStore } from "@reduxjs/toolkit";
// import productReducer from "./productSlice";
import productSlice from "./productSlice";
import loggerMiddleWare from "../services/loggerMiddleWare";

export const store = configureStore({
  reducer: {
    products: productSlice,
  },
  // middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(loggerMiddleWare) //одно и тоже
  middleware: (getDefaultMiddleWare) => [...getDefaultMiddleWare(), loggerMiddleWare]
});
