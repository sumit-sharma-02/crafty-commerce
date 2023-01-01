import axios from "axios";
import { orderConstants } from "../constants/order";

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: orderConstants.CREATE_ORDER_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post("/api/v1/order/new", order, config);

    dispatch({
      type: orderConstants.CREATE_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: orderConstants.CREATE_ORDER_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Get currently logged in user orders
export const myOrders =
  (ordersCurrentPage = 1) =>
  async (dispatch) => {
    try {
      dispatch({
        type: orderConstants.MY_ORDERS_REQUEST,
      });

      const data = await axios.get(
        `/api/v1/orders/myOrders?page=${ordersCurrentPage}`
      );

      dispatch({
        type: orderConstants.MY_ORDERS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: orderConstants.MY_ORDERS_FAIL,
        payload: error.response.data.error,
      });
    }
  };

// Get order details
export const getOrderDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: orderConstants.ORDER_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`/api/v1/order/${id}`);

    dispatch({
      type: orderConstants.ORDER_DETAILS_SUCCESS,
      payload: data.order,
    });
  } catch (error) {
    dispatch({
      type: orderConstants.ORDER_DETAILS_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Get All Orders - ADMIN
export const allOrders = () => async (dispatch) => {
  try {
    dispatch({
      type: orderConstants.ALL_ORDERS_REQUEST,
    });

    const { data } = await axios.get(`/api/v1/admin/orders`);

    dispatch({
      type: orderConstants.ALL_ORDERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: orderConstants.ALL_ORDERS_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Update a Order - ADMIN
export const updateOrder = (id, orderData) => async (dispatch) => {
  try {
    dispatch({
      type: orderConstants.UPDATE_ORDER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(
      `/api/v1/admin/order/${id}`,
      orderData,
      config
    );

    dispatch({
      type: orderConstants.UPDATE_ORDER_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: orderConstants.UPDATE_ORDER_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: orderConstants.CLEAR_ERRORS,
  });
};
