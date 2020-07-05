import { ADD_ORDER } from "../actions/orders";

const initialState = {
  orders: []
};

export default (state = initialState, action) => {
  const order = (id, items, totalAmount, date) => ({
    id,
    items,
    totalAmount,
    date
  });
  switch (action.type) {
    case ADD_ORDER:
      const newOrder = order(
        new Date().toString(),
        action.orderData.items,
        action.orderData.amount,
        new Date()
      );
      return {
        ...state,
        orders: state.orders.concat(newOrder)
      };
  }

  return state;
};
