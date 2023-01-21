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
  newProductReducer,
  productManipulationReducer,
  productReviewsReducer,
  reviewManipulationReducer,
} from "./reducers/product";
import {
  userAuthReducer,
  userReducer,
  forgotPasswordReducer,
  allUsersReducer,
  userDetailsReducer,
} from "./reducers/user";
import { cartReducer } from "./reducers/cart";
import {
  newOrderReducer,
  myOrdersReducer,
  orderDetailsReducer,
  allOrdersReducer,
  orderManipulationReducer,
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
  newProduct: newProductReducer,
  manipulateProduct: productManipulationReducer,
  auth: userAuthReducer,
  user: userReducer,
  forgotPassword: forgotPasswordReducer,
  cart: cartReducer,
  order: newOrderReducer,
  myOrders: myOrdersReducer,
  orderDetails: orderDetailsReducer,
  allOrders: allOrdersReducer,
  manipulateOrder: orderManipulationReducer,
  newReview: newReviewReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  productReviews: productReviewsReducer,
  reviewReducer: reviewManipulationReducer,
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

export const server = "https://crafty-commerce-api.vercel.app/api/v1";
