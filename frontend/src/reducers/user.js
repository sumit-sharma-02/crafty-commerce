import userConstants from "../constants/user";

export const userAuthReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };

    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };

    case userConstants.LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    case userConstants.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
