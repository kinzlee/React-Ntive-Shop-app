import { ADD_TO_CART, DELETE_FROM_CART } from "../actions/cart";

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
    case DELETE_FROM_CART:
      const selectesCartItem = state.items[action.pid];
      const currentQty = selectesCartItem.quantity;
      let updatedCartItems;
      if (currentQty > 1) {
        const updatedCartItem = cartItem(
          selectesCartItem.quantity - 1,
          selectesCartItem.productPrice,
          selectesCartItem.productTitle,
          selectesCartItem.sum - selectesCartItem.productPrice
        );
        updatedCartItems = { ...state.items, [action.pid]: updatedCartItem };
      } else {
        updatedCartItems = { ...state.items };
        delete updatedCartItems[action.pid];
      }
      return {
        ...state,
        items: updatedCartItems,
        totalAmount: state.productPrice - updatedCartItem.productPrice
      };
  }
  return state;
};
