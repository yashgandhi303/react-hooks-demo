import React, { useEffect } from 'react';
import useFirebaseReducer from './appReducer';
// import axios from 'axios';
import * as actions from '../actions/actionTypes';
import api from '../api';

const AppContext = React.createContext({});

const AppContextProvider = (props) => {
  const [state, dispatch] = useFirebaseReducer();

  async function getStockItems() {
    dispatch({ type: actions.FETCH_STOCK_ITEMS });
    try {
      const data = await api.fetchItems();
       dispatch({ type: actions.FETCH_ITEMS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: actions.ERROR, payload: error });
    }
  }

  useEffect(() => {
    // let didCancel = false;
    //
    // const fetchData = async () => {
    //   dispatch({ type: 'FETCH_INIT' });
    //
    //   try {
    //     const result = await axios(url);
    //
    //     if (!didCancel) {
    //       dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
    //     }
    //   } catch (error) {
    //     if (!didCancel) {
    //       dispatch({ type: 'FETCH_FAILURE' });
    //     }
    //   }
    // };

    getStockItems();

    // return () => {
    //   didCancel = true;
    // };
  }, []);

  // return Object.assign([state, getStockItems], { state, getStockItems });
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  )
};

export { AppContext, AppContextProvider };
