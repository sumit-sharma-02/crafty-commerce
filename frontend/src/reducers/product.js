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
