import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productsReducer } from "./reducers/product";

const reducers = combineReducers({
  products: productsReducer,
});

let initialState = {};

const middleware = [thunk];
const store = configureStore(
  {
    reducer: reducers,
    middleware: [thunk],
  },
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
