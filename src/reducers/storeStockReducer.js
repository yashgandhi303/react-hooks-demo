import {
  ADD_ITEM_TO_CART,
  BUY_CART_ITEMS,
  // FETCH_CART_ITEMS,
  FETCH_STOCK_ITEMS,
  REMOVE_FROM_CART,
} from '../actions/actionTypes';

const initialState =  {
   isFetching: false,
   stockItems: [],
 };

const storeStock = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STOCK_ITEMS:
      return {
        ...state,
        isFetching: false,
        stockItems: getStockItemsArray(action.payload),
      };
    // case FETCH_CART_ITEMS:  // strictly for loading (for now)
    //   return {
    //     ...state,
    //     isFetching: true,
    //   };
    case REMOVE_FROM_CART:
    case ADD_ITEM_TO_CART:
      const addedItem = state.stockItems.find(item => item.id === action.id);
      const updatedItem = {
        ...addedItem,
        stock: action.stock,
      };
      return {
        ...state,
        stockItems: [
          // TODO: need to do the slice thing (currently moving the item to the end of the array)
          ...state.stockItems.filter(item => item.id !== action.id),
          updatedItem
        ]
      };
    case BUY_CART_ITEMS:
      // right now just going back to full stock; will update to subtract bought items
      // from store stock (if enough in stock)
      return initialState;
    default:
      return state;
  }
};

// TODO: make this (a lot) better...
const getStockItemsArray = (items) => {
  const stockItemsArray = [];
  for (let item in items) {
    stockItemsArray.push(items[item])
  }
  return stockItemsArray;
};

export default storeStock;
