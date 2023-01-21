import axios from "axios";
import productsConstant from "../constants/product";

// Get All Products
export const getProducts =
  (
    keyword = "",
    currentPage = 1,
    price = [1, 5000],
    category,
    rating = 0,
    sorting = "A-Z"
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: productsConstant.ALL_PRODUCTS_REQUEST,
      });
      let path = `https://crafty-commerce-api.vercel.app/api/v1/products?sort=${sorting}&keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&ratings[gte]=${rating}`;
      if (category) {
        path = `https://crafty-commerce-api.vercel.app/api/v1/products?sort=${sorting}&keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&category=${category}&ratings[gte]=${rating}`;
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

// Get Admin All Products
export const getAdminProducts =
  (currentPage = 1) =>
  async (dispatch) => {
    try {
      dispatch({
        type: productsConstant.ADMIN_PRODUCTS_REQUEST,
      });

      const data = await axios.get(
        `https://crafty-commerce-api.vercel.app/api/v1/admin/products?page=${currentPage}`
      );

      dispatch({
        type: productsConstant.ADMIN_PRODUCTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: productsConstant.ADMIN_PRODUCTS_FAIL,
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

// Create new Product
export const newProduct = (productData) => async (dispatch) => {
  try {
    dispatch({
      type: productsConstant.NEW_PRODUCT_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/v1/admin/product/new",
      productData,
      config
    );

    dispatch({
      type: productsConstant.NEW_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: productsConstant.NEW_PRODUCT_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Update a Product
export const updateProduct = (id, productData) => async (dispatch) => {
  try {
    dispatch({
      type: productsConstant.UPDATE_PRODUCT_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(
      `/api/v1/admin/product/${id}`,
      productData,
      config
    );

    dispatch({
      type: productsConstant.UPDATE_PRODUCT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: productsConstant.UPDATE_PRODUCT_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Delete a Product
export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({
      type: productsConstant.DELETE_PRODUCT_REQUEST,
    });

    const { data } = await axios.delete(`/api/v1/admin/product/${id}`);

    dispatch({
      type: productsConstant.DELETE_PRODUCT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: productsConstant.DELETE_PRODUCT_FAIL,
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

// Get Product Reviews
export const getProductReviews = (id) => async (dispatch) => {
  try {
    dispatch({
      type: productsConstant.GET_REVIEWS_REQUEST,
    });

    const { data } = await axios.get(`/api/v1/reviews?id=${id}`);

    dispatch({
      type: productsConstant.GET_REVIEWS_SUCCESS,
      payload: data.reviews,
    });
  } catch (error) {
    dispatch({
      type: productsConstant.GET_REVIEWS_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Delete Review
export const deleteReview = (id, productId) => async (dispatch) => {
  try {
    dispatch({
      type: productsConstant.DELETE_REVIEW_REQUEST,
    });

    const { data } = await axios.delete(
      `/api/v1/reviews?id=${id}&productId=${productId}`
    );

    dispatch({
      type: productsConstant.DELETE_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: productsConstant.DELETE_REVIEW_FAIL,
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
