import React, { useEffect } from 'react';
import useAppReducer from './appReducer';
import Api from '../api';
import * as actions from '../actions/actionTypes';

const AppContext = React.createContext({});

const AppContextProvider = (props) => {
  const [state, dispatch] = useAppReducer();

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

  function addToCart(item, amt) {
    try {
      // const newStockAmt = state.stockItems[item.id].stock - amt;
      dispatch({
        type: actions.ADD_ITEM_TO_CART,
        payload: {
          amt,
          item,
        },
      })
    } catch (error) {
      dispatch({ type: actions.ERROR, payload: error });
    }
  }

  function removeFromCart(item, amt) {
    try {
      // const newStockAmt = state.stockItems[item.id].stock - amt;
      dispatch({
        type: actions.REMOVE_FROM_CART,
        payload: {
          amt,
          item,
        },
      })
    } catch (error) {
      dispatch({ type: actions.ERROR, payload: error });
    }
  }

  async function checkout() {
    try {
      const { cartItems } = state;

      const reqData = {};

      for (let [key, item] of Object.entries(cartItems)) {
        const path = `${key}/stock`;
        reqData[path] = item.stock;
      }
      const res = await Api.buyItems(reqData);
      dispatch({
        type: actions.BUY_CART_ITEMS,
      })
    } catch (error) {
      dispatch({ type: actions.ERROR, payload: error });
    }
  }

  return (
    <AppContext.Provider value={{
      state,
      dispatch,
      addToCart,
      checkout,
      removeFromCart
    }}>
      {props.children}
    </AppContext.Provider>
  )
};

export { AppContext, AppContextProvider };
