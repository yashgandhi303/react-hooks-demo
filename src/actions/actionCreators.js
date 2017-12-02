import axios from 'axios';
import {
  FETCH_SAMPLE,
  SAMPLE_LOADED
} from './actionTypes';

let ROOT_URL;

// if (process.env.NODE_ENV === 'production') {
//   ROOT_URL = '/';
// } else {
//   ROOT_URL = 'http://localhost:3090/';
// }


/*
      SEARCH actions
*/
export function setSearchTerm(searchTerm) {
  // console.log('setSearchTerm: ', searchTerm);
  return { type: FETCH_SAMPLE, payload: searchTerm };
}

export function getSearchTerm(searchTerm, searchType) {
  // console.log('getWeather called: ', WEATHER_URL);
  return (dispatch) => {
    dispatch(setSearchTerm(searchTerm, searchType));
  }
}
