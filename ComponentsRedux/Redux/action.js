import { Add_To_Cart, REMOVE_FROM_CART, USER_LIST } from "./constatnt";

export function addToCart(item) {
  return {
    type: Add_To_Cart,
    data: item,
  };
}

export function removeFromCart(item) {
  return {
    type: REMOVE_FROM_CART,
    data: item,
  };
}

export function getUserList() {
  return {
    type: USER_LIST,
  };
}
