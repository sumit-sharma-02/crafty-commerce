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

    const { data } = await axios.post("/api/v1/orders/new", order, config);

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

// Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: orderConstants.CLEAR_ERRORS,
  });
};
