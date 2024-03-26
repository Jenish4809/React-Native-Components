import { Add_To_Cart, REMOVE_FROM_CART } from "./constatnt";

const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Add_To_Cart:
      return [...state, action.data];
    case REMOVE_FROM_CART:
      let result = state.filter((item) => {
        return item.name != action.data;
      });
      return [...result];

    default:
      return state;
  }
};
