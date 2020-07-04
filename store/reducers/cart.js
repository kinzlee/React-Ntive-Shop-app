import { ADD_TO_CART } from "../actions/cart";

const initialState = {
  items: {},
  totalAmount: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const cartItem = (quantity, productPrice, productTitle, sum) => ({
        quantity,
        productPrice,
        productTitle,
        sum
      });
      const prodPrice = addedProduct.price;
      const prodTitle = addedProduct.productName;

      let updatedCartItem;

      if (state.items[addedProduct.id]) {
        updatedCartItem = cartItem(
          state.items[addedProduct.id].quantity + 1,
          prodPrice,
          prodTitle,
          state.items[addedProduct.id].sum + prodPrice
        );
      } else {
        updatedCartItem = cartItem(1, prodPrice, prodTitle, prodPrice);
      }
      return {
        ...state,
        items: { ...state.items, [addedProduct.id]: updatedCartItem },
        totalAmount: state.totalAmount + prodPrice
      };
  }
  return state;
};
