import React, { useEffect } from 'react';
import useFirebaseReducer from './appReducer';
import * as actions from '../actions/actionTypes';
import Api from '../api';

const AppContext = React.createContext({});

const AppContextProvider = (props) => {
  const [state, dispatch] = useFirebaseReducer();

  useEffect(() => {
    let didCancel = false;

    async function getStockItems() {
      dispatch({ type: actions.FETCH_STOCK_ITEMS });
      try {
        const data = await Api.fetchItems();
        if (!didCancel) {
          dispatch({ type: actions.FETCH_ITEMS_SUCCESS, payload: data });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: actions.ERROR, payload: error });
        }
      }
    }

    getStockItems();

    return () => {
      didCancel = true;
    };
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  )
};

export { AppContext, AppContextProvider };
