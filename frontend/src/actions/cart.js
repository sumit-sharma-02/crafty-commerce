import axios from "axios";
import { cartConstants } from "../constants/cart";
import { server } from "../store";

export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "https://crafty-commerce.vercel.app",
    },
    withCredentials: true,
  };

  const { data } = await axios.get(`${server}/product/${id}`, config);

  dispatch({
    type: cartConstants.ADD_TO_CART,
    payload: {
      product: data.product._id,
      name: data.product.name,
      price: data.product.price,
      image: data.product.images[0].url,
      stock: data.product.stock,
      quantity,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeItemsFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: cartConstants.REMOVE_CART_ITEM,
    payload: id,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const saveShippingInfo = (data) => async (dispatch) => {
  dispatch({
    type: cartConstants.SAVE_SHIPPING_INFO,
    payload: data,
  });
  localStorage.setItem("shippingInfo", JSON.stringify(data));
};
