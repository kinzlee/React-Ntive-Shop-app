import { ADD_TO_CART } from "../actions/cart";
import CartItem from "../reducers/product";

const initialState = {
  items: {},
  totalAmount: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const cartItem = (quantity, productPrice, productTitle, sum) => ({
        quantity: quantity,
        productPrice: productPrice,
        productTitle: productTitle,
        sum: sum
      });
      const productPrice = addedProduct.price;
      const productTitle = addedProduct.title;

      let updatedCartItem;

      if (state.items[addedProduct.id]) {
        updatedCartItem = cartItem(
          state.items[addedProduct.id].quantity + 1,
          (productPrice = addedProduct.price),
          (productTitle = addedProduct.title),
          state.items[addedProduct.id].sum + productPrice
        );
      } else {
        updatedCartItem = new cartItem(
          1,
          productPrice,
          productTitle,
          productPrice
        );
      }
      return {
        ...state,
        items: { ...state.items, [addedProduct.id]: updatedCartItem },
        totalAmount: state.totalAmount.productPrice
      };
  }
  return state;
};
