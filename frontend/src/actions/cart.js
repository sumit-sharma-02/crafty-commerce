import axios from "axios";
import { cartConstants } from "../constants/cart";

export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/v1/product/${id}`);
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
  // const { data } = await axios.get(`/api/v1/product/${id}`);
  dispatch({
    type: cartConstants.REMOVE_CART_ITEM,
    payload: id,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
