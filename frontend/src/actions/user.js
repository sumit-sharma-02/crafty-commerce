import axios from "axios";
import userConstants from "../constants/user";

// Login
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
      "https://crafty-commerce-api.vercel.app/api/v1/login",
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
      payload: error.response.data.error,
    });
  }
};

// Register User
export const register = (userData) => async (dispatch) => {
  try {
    dispatch({
      type: userConstants.REGISTER_USER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const { data } = await axios.post(
      "https://crafty-commerce-api.vercel.app/api/v1/register",
      userData,
      config
    );

    dispatch({
      type: userConstants.REGISTER_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: userConstants.REGISTER_USER_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Load user
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: userConstants.LOAD_USER_REQUEST,
    });

    const { data } = await axios.get(
      "https://crafty-commerce-api.vercel.app/api/v1/profile"
    );

    dispatch({
      type: userConstants.LOAD_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: userConstants.LOAD_USER_FAIL,
      payload: error.response.data.error,
    });
  }
};

//Logout user
export const logout = () => async (dispatch) => {
  try {
    await axios.get("https://crafty-commerce-api.vercel.app/api/v1/logout");
    dispatch({ type: userConstants.LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({
      type: userConstants.LOGOUT_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Update profile
export const updateProfile = (userData) => async (dispatch) => {
  try {
    dispatch({
      type: userConstants.UPDATE_PROFILE_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const { data } = await axios.put(
      "https://crafty-commerce-api.vercel.app/api/v1/profile/update",
      userData,
      config
    );

    dispatch({
      type: userConstants.UPDATE_PROFILE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: userConstants.UPDATE_PROFILE_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Update password
export const updatePassword = (passwords) => async (dispatch) => {
  try {
    dispatch({
      type: userConstants.UPDATE_PASSWORD_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(
      "https://crafty-commerce-api.vercel.app/api/v1/password/update",
      passwords,
      config
    );

    dispatch({
      type: userConstants.UPDATE_PASSWORD_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: userConstants.UPDATE_PASSWORD_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Forgot password
export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({
      type: userConstants.FORGOT_PASSWORD_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "https://crafty-commerce-api.vercel.app/api/v1/password/forgot",
      email,
      config
    );

    dispatch({
      type: userConstants.FORGOT_PASSWORD_SUCCESS,
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: userConstants.FORGOT_PASSWORD_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Reset password
export const resetPassword = (token, passwords) => async (dispatch) => {
  try {
    dispatch({
      type: userConstants.NEW_PASSWORD_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(
      `https://crafty-commerce-api.vercel.app/api/v1/password/reset/${token}`,
      passwords,
      config
    );

    dispatch({
      type: userConstants.NEW_PASSWORD_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: userConstants.NEW_PASSWORD_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Get all users - ADMIN
export const allUsers =
  (usersCurrentPage = 1) =>
  async (dispatch) => {
    try {
      dispatch({
        type: userConstants.ALL_USERS_REQUEST,
      });

      const data = await axios.get(
        `https://crafty-commerce-api.vercel.app/api/v1/admin/users?page=${usersCurrentPage}`
      );

      dispatch({
        type: userConstants.ALL_USERS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: userConstants.ALL_USERS_FAIL,
        payload: error.response.data.error,
      });
    }
  };

// Delete user - ADMIN
export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch({
      type: userConstants.DELETE_USER_REQUEST,
    });

    const { data } = await axios.delete(
      `https://crafty-commerce-api.vercel.app/api/v1/admin/user/${id}`
    );

    dispatch({
      type: userConstants.DELETE_USER_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: userConstants.DELETE_USER_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Update user - ADMIN
export const updateUser = (id, userData) => async (dispatch) => {
  try {
    dispatch({
      type: userConstants.UPDATE_USER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(
      `https://crafty-commerce-api.vercel.app/api/v1/admin/user/${id}`,
      userData,
      config
    );

    dispatch({
      type: userConstants.UPDATE_USER_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: userConstants.UPDATE_USER_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Get user details - ADMIN
export const getUserDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: userConstants.USER_DETAILS_REQUEST,
    });

    const { data } = await axios.get(
      `https://crafty-commerce-api.vercel.app/api/v1/admin/user/${id}`
    );

    dispatch({
      type: userConstants.USER_DETAILS_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: userConstants.USER_DETAILS_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: userConstants.CLEAR_ERRORS,
  });
};
