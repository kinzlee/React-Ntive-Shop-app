import { ADD_ORDER } from "../actions/orders";
import moment from "moment";

const initialState = {
  orders: []
};

export default (state = initialState, action) => {
  const order = (id, items, totalAmount, date) => ({
    id,
    items,
    totalAmount,
    date,
    get readable() {
      return moment(date).format("MMM Do YYY, hh:mm");
    }
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
