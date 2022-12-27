import { orderConstants } from "../constants/order";

export const newOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case orderConstants.CREATE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case orderConstants.CREATE_ORDER_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };

    case orderConstants.CREATE_ORDER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case orderConstants.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
