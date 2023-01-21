import axios from "axios";
import { orderConstants } from "../constants/order";
import { server } from "../store";

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: orderConstants.CREATE_ORDER_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://crafty-commerce.vercel.app",
      },
      withCredentials: true,
    };

    const { data } = await axios.post(`${server}/order/new`, order, config);

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

      const config = {
        headers: {
          "Access-Control-Allow-Origin": "https://crafty-commerce.vercel.app",
        },
        withCredentials: true,
      };

      const data = await axios.get(
        `${server}/orders/myOrders?page=${ordersCurrentPage}`,
        config
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

    const config = {
      headers: {
        "Access-Control-Allow-Origin": "https://crafty-commerce.vercel.app",
      },
      withCredentials: true,
    };

    const { data } = await axios.get(`${server}/order/${id}`, config);

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
export const allOrders =
  (ordersCurrentPage = 1) =>
  async (dispatch) => {
    try {
      dispatch({
        type: orderConstants.ALL_ORDERS_REQUEST,
      });

      const config = {
        headers: {
          "Access-Control-Allow-Origin": "https://crafty-commerce.vercel.app",
        },
        withCredentials: true,
      };

      const data = await axios.get(
        `${server}/admin/orders?page=${ordersCurrentPage}`,
        config
      );

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
      withCredentials: true,
    };

    const { data } = await axios.put(
      `${server}/admin/order/${id}`,
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

// Delete a Product
export const deleteOrder = (id) => async (dispatch) => {
  try {
    dispatch({
      type: orderConstants.DELETE_ORDER_REQUEST,
    });

    const config = {
      headers: {
        "Access-Control-Allow-Origin": "https://crafty-commerce.vercel.app",
      },
      withCredentials: true,
    };

    const { data } = await axios.delete(`${server}/admin/order/${id}`, config);

    dispatch({
      type: orderConstants.DELETE_ORDER_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: orderConstants.DELETE_ORDER_FAIL,
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
