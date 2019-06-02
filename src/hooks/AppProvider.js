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

  async function addToCart(item, amt, initialAmt) {
    try {
      // debugger;
      // const newStockAmt = initialAmt - amt;
      const newStockAmt = state.stockItems[item.id].stock - amt;
      // const data = await Api.addItemToCart(item.id, newStockAmt);
      dispatch({
        type: actions.ADD_ITEM_TO_CART,
        payload: {
          amt,
          item,
          // initialAmt,
        },
      })
    } catch (error) {
      dispatch({ type: actions.ERROR, payload: error });
    }
  }

  async function removeFromCart(item, amt, initialAmt) {
    try {
      debugger;
      console.log("state.stockItems[item.id]: ", state.stockItems[item.id]);
      const newStockAmt = state.stockItems[item.id].stock - amt;
      const data = await Api.removeItemFromCart(item.id, newStockAmt);
      dispatch({
        type: actions.REMOVE_FROM_CART,
        payload: {
          amt,
          initialAmt,
          item,
        },
      })
    } catch (error) {
      dispatch({ type: actions.ERROR, payload: error });
    }
  }

  return (
    <AppContext.Provider value={{ state, dispatch, addToCart, removeFromCart }}>
      {props.children}
    </AppContext.Provider>
  )
};

export { AppContext, AppContextProvider };
