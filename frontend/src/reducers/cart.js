import { cartConstant } from "../constants/cart";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case cartConstant.ADD_TO_CART:
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

    default:
      return state;
  }
};
