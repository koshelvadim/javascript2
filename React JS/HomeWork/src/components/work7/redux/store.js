import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga" 
import usersSaga from "../sagas/userSaga";
import userReducer from "./userReducer";
import { loggerMiddleWare } from "./loggerMiddleWare";


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { users: userReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware, loggerMiddleWare),
});

sagaMiddleware.run(usersSaga);

export default store;
