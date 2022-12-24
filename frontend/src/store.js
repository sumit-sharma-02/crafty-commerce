import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productsReducer, productDetailsReducer } from "./reducers/product";
import {
  userAuthReducer,
  userReducer,
  forgotPasswordReducer,
} from "./reducers/user";
import { cartReducer } from "./reducers/cart";

const reducers = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  auth: userAuthReducer,
  user: userReducer,
  forgotPassword: forgotPasswordReducer,
  cart: cartReducer,
});

let initialState = {
  cart: {
    cartItems: localStorage?.getItem("cartItems")
      ? JSON.parse(localStorage?.getItem("cartItems"))
      : [],
  },
};

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
