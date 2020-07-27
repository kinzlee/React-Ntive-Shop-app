import { ADD_ORDER_SUCCESS, ADD_ORDER_LOADING } from "../actions/orders";
import moment from "moment";

const initialState = {
  orders: [],
  isLoading: false
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
    case ADD_ORDER_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case ADD_ORDER_SUCCESS:
      const newOrder = order(
        new Date().toString(),
        action.orderData.items,
        action.orderData.amount,
        action.orderData.date
      );
      return {
        ...state,
        isLoading: false,
        orders: state.orders.concat(newOrder)
      };
  }

  return state;
};
