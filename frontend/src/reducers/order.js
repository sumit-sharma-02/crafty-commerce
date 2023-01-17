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

export const myOrdersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case orderConstants.MY_ORDERS_REQUEST:
      return {
        loading: true,
      };

    case orderConstants.MY_ORDERS_SUCCESS:
      return {
        loading: false,
        orders: action.payload.data.orders,
        ordersCount: action.payload.data.ordersCount,
        filteredOrder: action.payload.data.filteredOrder,
        filteredOrderCount: action.payload.data.filteredOrderCount,
        ordersPerPage: action.payload.data.ordersPerPage,
      };

    case orderConstants.MY_ORDERS_FAIL:
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

export const orderDetailsReducer = (state = { order: {} }, action) => {
  switch (action.type) {
    case orderConstants.ORDER_DETAILS_REQUEST:
      return {
        loading: true,
      };

    case orderConstants.ORDER_DETAILS_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };

    case orderConstants.ORDER_DETAILS_FAIL:
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

export const allOrdersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case orderConstants.ALL_ORDERS_REQUEST:
      return {
        loading: true,
      };

    case orderConstants.ALL_ORDERS_SUCCESS:
      return {
        loading: false,
        orders: action.payload.data.orders,
        ordersCount: action.payload.data.ordersCount,
        resPerPage: action.payload.data.resPerPage,
        filteredOrdersCount: action.payload.data.filteredOrdersCount,
        totalAmount: action.payload.data.totalAmount,
      };

    case orderConstants.ALL_ORDERS_FAIL:
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

export const orderManipulationReducer = (state = {}, action) => {
  switch (action.type) {
    case orderConstants.UPDATE_ORDER_REQUEST:
    case orderConstants.DELETE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case orderConstants.UPDATE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };

    case orderConstants.DELETE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case orderConstants.UPDATE_ORDER_RESET:
      return {
        ...state,
        isUpdated: false,
        loading: false,
      };

    case orderConstants.DELETE_ORDER_RESET:
      return {
        ...state,
        isDeleted: false,
        loading: false,
      };

    case orderConstants.UPDATE_ORDER_FAIL:
    case orderConstants.DELETE_ORDER_FAIL:
      return {
        ...state,
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
