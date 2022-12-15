import axios from "axios";
import userConstants from "../constants/user";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: userConstants.LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/v1/login",
      { email, password },
      config
    );

    dispatch({
      type: userConstants.LOGIN_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: userConstants.LOGIN_FAIL,
      payload: error.response.data.message,
    });
  }
};
