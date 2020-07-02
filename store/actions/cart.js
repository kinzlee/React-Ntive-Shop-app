import Product from "../../models/Product";

export const ADD_TO_CART = "ADD_TO_CART";

export const addToCart = Product => {
  return { type: ADD_TO_CART, Product: Product };
};
