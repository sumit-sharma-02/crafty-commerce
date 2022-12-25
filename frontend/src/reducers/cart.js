import { cartConstants } from "../constants/cart";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case cartConstants.ADD_TO_CART:
      const item = action.payload;

      const isItemExist = state.cartItems.find(
        (items) => items.product === item.product
      );

      if (isItemExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((items) =>
            items.product === isItemExist.product ? item : items
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case cartConstants.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.product !== action.payload
        ),
      };

    default:
      return state;
  }
};
