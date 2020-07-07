import PRODUCTS from "../../data/dummy-data";
import { DELETE_PRODUCT } from "../actions/product";
import Product from "../../models/Product";

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter(prod => prod.userId === "u1")
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PRODUCT:
      return {
        ...state,
        userProducts: state.userProducts.filter(product => product.id !== pid),
        availableProducts: state.availableProducts.filter(product.id !== pid)
      };
  }
  return state;
};
