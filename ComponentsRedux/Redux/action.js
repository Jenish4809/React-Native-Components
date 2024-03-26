import { Add_To_Cart, REMOVE_FROM_CART } from "./constatnt";

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
