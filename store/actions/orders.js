import moment from "moment";
export const ADD_ORDER = "ADD_ORDER";
export const SET_ORDER = "SET_ORDER";

const order = (id, items, totalAmount, date) => ({
  id,
  items,
  totalAmount,
  date,
  get readable() {
    return moment(date).format("MMMM Do YYYY, hh:mm");
  }
});

export const fetchOrders = () => {
  return async dispatch => {
    try {
      const response = await fetch(
        "https://shopper-e5714.firebaseio.com/orders/u1.json"
      );

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const resData = await response.json();

      console.log(resData);
      const loadedOrders = () => {
        return Object.keys(resData).map(key =>
          order(
            key,
            resData[key].cartItems,
            resData[key].totalAmount,
            new Date(resData[key].date)
          )
        );
      };

      dispatch({ type: SET_ORDER, orders: loadedOrders() });
    } catch (err) {
      throw err;
    }
  };
};

export const addOrder = (cartItems, totalAmount) => {
  const date = new Date();
  return async dispatch => {
    const response = await fetch(
      "https://shopper-e5714.firebaseio.com/orders/u1.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          cartItems,
          totalAmount,
          date: new Date().toISOString
        })
      }
    );

    if (!response.ok) {
      throw new Error("something went wrong!");
    }

    const resData = await response.json();

    dispatch({
      type: ADD_ORDER,
      orderData: {
        id: resData.name,
        items: cartItems,
        amount: totalAmount,
        date: date
      }
    });
  };
};
