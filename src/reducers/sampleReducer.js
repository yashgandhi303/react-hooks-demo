import { FETCH_SAMPLE, SAMPLE_LOADED } from '../actions/actionTypes';

const initialState = {};

const sampleReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_SAMPLE:
      const newSample = action.payload;
      // return [...state, newSample];
      return state;
    // case APP_ERROR:
    //   return [...state, newWeather];
    default:
      return state;
  }
}

export default sampleReducer;
