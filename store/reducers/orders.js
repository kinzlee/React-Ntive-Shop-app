import { ADD_ORDER, SET_ORDER } from "../actions/orders";
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
      return moment(date).format("MMMM Do YYYY, hh:mm");
    }
  });
  switch (action.type) {
    case SET_ORDER:
      return {
        orders: action.orders
      };
    case ADD_ORDER:
      const newOrder = order(
        new Date().toString(),
        action.orderData.items,
        action.orderData.amount,
        action.orderData.date
      );
      return {
        ...state,
        orders: state.orders.concat(newOrder)
      };
  }

  return state;
};
