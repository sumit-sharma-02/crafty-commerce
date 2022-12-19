import productsConstant from "../constants/product";

export const productsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case productsConstant.ALL_PRODUCTS_REQUEST:
      return {
        loading: true,
        products: [],
      };

    case productsConstant.ALL_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload.data.products,
        productsCount: action.payload.data.productsCount,
        resPerPage: action.payload.data.resPerPage,
        count: action.payload.data.count,
      };

    case productsConstant.ALL_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case productsConstant.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const productDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case productsConstant.PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case productsConstant.PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };

    case productsConstant.PRODUCT_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case productsConstant.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
