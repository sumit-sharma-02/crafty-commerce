import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productsReducer,
  productDetailsReducer,
  newReviewReducer,
} from "./reducers/product";
import {
  userAuthReducer,
  userReducer,
  forgotPasswordReducer,
} from "./reducers/user";
import { cartReducer } from "./reducers/cart";
import {
  newOrderReducer,
  myOrdersReducer,
  orderDetailsReducer,
} from "./reducers/order";

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {
          country: "",
          fullName: "",
          phoneNo: "",
          addressLine1: "",
          addressLine2: "",
          city: "",
          postalCode: "",
        },
  },
};

const reducers = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  auth: userAuthReducer,
  user: userReducer,
  forgotPassword: forgotPasswordReducer,
  cart: cartReducer,
  order: newOrderReducer,
  myOrders: myOrdersReducer,
  orderDetails: orderDetailsReducer,
  newReview: newReviewReducer,
});

const middleware = [thunk];
const store = configureStore(
  {
    reducer: reducers,
    middleware: [thunk],
    preloadedState: initialState,
  },
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
