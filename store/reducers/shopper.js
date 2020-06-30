import PRODUCTS from "../../data/dummy-data";
import { TOGGLE_CART } from "../actions/shopper";

const initialState = {
  products: PRODUCTS,
  productCart: []
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      const existingIndex = state.productCart.findIndex(product => {
        return product.id === productId;
      });

      if (existingIndex >= 0) {
        const updatedProdCart = [...state.productCart];
        updatedProdCart.splice(existingIndex, 1);
        return { ...state, productCart: updatedProdCart };
      } else {
        products = state.products.find(product => product.id === productId);
        return { ...state, productCart: state.productCart.concat(productId) };
      }
    default:
      return state;
  }
};

export default productReducer;
