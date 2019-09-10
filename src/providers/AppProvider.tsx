import React, {useEffect} from 'react';
import {appReducer, Action, initialState, IState} from '../hooks/appReducer';
import Api from '../api';
import * as actions from '../actions/actionTypes';
import {IItem} from '../components/ItemCard';

type Dispatch = (action: Action) => void;

interface IAppContext {
  state: IState;
  addToCart: (item: IItem, amt: number) => void;
  checkout: () => Promise<true | undefined>;
  addItemToStock: (item: any) => void;
}

const AppStateContext = React.createContext<IAppContext | undefined>(undefined);
const AppDispatchContext = React.createContext<Dispatch | undefined>(undefined);

const AppContextProvider: React.FC = ({children}) => {
  const [state, dispatch] = React.useReducer(appReducer, initialState);

  useEffect(() => {
    let didCancel = false;

    async function getStockItems() {
      dispatch({type: actions.FETCH_STOCK_ITEMS});
      try {
        const data = await Api.fetchItems();
        if (!didCancel) {
          dispatch({type: actions.FETCH_ITEMS_SUCCESS, payload: data});
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({type: actions.ERROR, payload: error});
        }
      }
    }

    getStockItems();

    return () => {
      didCancel = true;
    };
  }, [dispatch]);

  function addToCart(item: IItem, amt: number) {
    try {
      dispatch({
        type: actions.ADD_ITEM_TO_CART,
        payload: {
          amt,
          item,
        },
      });
    } catch (error) {
      dispatch({type: actions.ERROR, payload: error});
    }
  }

  function removeFromCart(item: IItem, amt: number) {
    try {
      dispatch({
        type: actions.REMOVE_FROM_CART,
        payload: {
          amt,
          item,
        },
      });
    } catch (error) {
      dispatch({type: actions.ERROR, payload: error});
    }
  }

  async function checkout() {
    try {
      const {cartItems}: {cartItems: {[id: string]: IItem}} = state;

      const reqData: {[path: string]: number} = {}; // FIXME - is this fine??

      for (let [key, item] of Object.entries(cartItems)) {
        const path = `${key}/stock`;
        reqData[path] = item.stock;
      }
      const res = await Api.buyItems(reqData);
      dispatch({
        type: actions.BUY_CART_ITEMS,
      });
      return true;
    } catch (error) {
      dispatch({type: actions.ERROR, payload: error});
    }
  }

  async function addItemToStock(item: any) {
    try {
      const res = await Api.addItemToStock(item);
      dispatch({type: actions.ADD_ITEM_TO_STOCK, payload: item});
      return true;
    } catch (error) {
      dispatch({type: actions.ERROR, payload: error});
      return false;
    }
  }

  const appState = {
    state,
    addToCart,
    checkout,
    removeFromCart,
    addItemToStock,
  };

  return (
    <AppStateContext.Provider value={appState}>
      <AppDispatchContext.Provider value={dispatch}>{children}</AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

function useAppState() {
  const context = React.useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within an AppContextProvider');
  }
  return context;
}

function useAppDispatch() {
  const context = React.useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error('useAppDispatch must be used within an AppContextProvider');
  }
  return context;
}

export {AppContextProvider, AppStateContext, useAppState, useAppDispatch};
