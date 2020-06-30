export const TOGGLE_CART = "TOGGLE_CART";

export const toggleCart = id => {
  return { type: TOGGLE_CART, productId: id };
};
