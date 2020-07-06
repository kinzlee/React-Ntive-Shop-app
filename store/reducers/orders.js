import { ADD_ORDER } from "../actions/orders";
import * as moment from "moment";

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

  Object.defineProperty(order, readable, {
    get: function() {
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
