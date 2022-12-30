import axios from "axios";
import productsConstant from "../constants/product";

// Get All Products
export const getProducts =
  (keyword = "", currentPage = 1, price = [1, 2000], category, rating = 0) =>
  async (dispatch) => {
    try {
      dispatch({
        type: productsConstant.ALL_PRODUCTS_REQUEST,
      });
      let path = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&ratings[gte]=${rating}`;
      if (category) {
        path = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&category=${category}&ratings[gte]=${rating}`;
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

// New Review of the Product
export const newReview = (reviewData) => async (dispatch) => {
  try {
    dispatch({
      type: productsConstant.NEW_REVIEW_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(`/api/v1/review`, reviewData, config);

    dispatch({
      type: productsConstant.NEW_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: productsConstant.NEW_REVIEW_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Get Admin All Products
export const getAdminProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: productsConstant.ADMIN_PRODUCTS_REQUEST,
    });

    const { data } = await axios.get(`/api/v1/admin/products`);

    dispatch({
      type: productsConstant.ADMIN_PRODUCTS_SUCCESS,
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: productsConstant.ADMIN_PRODUCTS_FAIL,
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
