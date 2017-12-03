import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/actionTypes';

const initialState = {};

const itemReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      // const newSample = action.payload;
      // return [...state, newSample];
      return state;
    case REMOVE_FROM_CART:
      // return [...state, newWeather];
      return state;
    default:
      return state;
  }
}

export default itemReducer;
