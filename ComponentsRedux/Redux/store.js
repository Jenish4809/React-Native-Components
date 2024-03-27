import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import CreateSagaMiddleware from "redux-saga";
import SagaData from "./saga";

const sagaMiddleware = CreateSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});
sagaMiddleware.run(SagaData);
export default store;
