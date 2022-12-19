import axios from "axios";
import productsConstant from "../constants/product";

// Get All Products
export const getProducts =
  (keyword = "", currentPage = 1, price = [1, 2000], category) =>
  async (dispatch) => {
    try {
      dispatch({
        type: productsConstant.ALL_PRODUCTS_REQUEST,
      });
      let path = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}`;
      if (category) {
        path = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&category=${category}`;
      }

      const data = await axios.get(path);
      dispatch({
        type: productsConstant.ALL_PRODUCTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: productsConstant.ALL_PRODUCTS_FAIL,
        payload: error.response.data.error,
      });
    }
  };

// Get Details of a Product
export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: productsConstant.PRODUCT_DETAILS_REQUEST,
    });
    const { data } = await axios.get(`/api/v1/product/${id}`);
    dispatch({
      type: productsConstant.PRODUCT_DETAILS_SUCCESS,
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: productsConstant.PRODUCT_DETAILS_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: productsConstant.CLEAR_ERRORS,
  });
};
