import { Add_To_Cart, REMOVE_FROM_CART, SET_USERDATA } from "./constatnt";

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
    case SET_USERDATA:
      return [...state, action.data];
    default:
      return state;
  }
};
