import {ADD_ORDER} from '../actions/orders';

const initialState = {
    orders: []
};

export default (state=initialState, action) => {
    const order = (id, items, totalAmount, date) => ({
        id,
        items,
        totalAmount,
        dates
    })
    switch(action.type) {

    }

    return state;
}