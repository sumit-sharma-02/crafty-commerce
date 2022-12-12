import axios from "axios";
import productsConstant from "../constants/product";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: productsConstant.ALL_PRODUCTS_REQUEST,
    });
    const data = await axios.get("/api/v1/products");
    dispatch({
      type: productsConstant.ALL_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: productsConstant.ALL_PRODUCTS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: productsConstant.CLEAR_ERRORS,
  });
};
