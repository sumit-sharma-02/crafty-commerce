import axios from "axios";
import { cartConstant } from "../constants/cart";

export const addItemsToCart = (id, quantity) => (dispatch, getState) => {
  const { data } = axios.get(`/api/v1/product/${id}`);
  dispatch({
    type: cartConstant.ADD_TO_CART,
    payload: {
      product: data.product_id,
      name: data.product.name,
      price: data.product.price,
      image: data.product.images[0].url,
      stock: data.product.stock,
      quantity,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState.cart.cartItems));
};
