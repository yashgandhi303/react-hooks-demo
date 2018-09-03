import {
  FETCH_ITEMS_IN_STOCK, 
  FETCH_CART_ITEMS,
  ADD_ITEM_TO_CART,
  REMOVE_FROM_CART,
  BUY_ITEMS,
} from '../actions/actionTypes';

const initialState =  {
   isFetching: false,
   stockItems: [],
 };

const storeStock = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_IN_STOCK:
      return {
        ...state,
        isFetching: false,
        stockItems: getStockItemsArray(action.payload),
      };
    case FETCH_CART_ITEMS:  // strictly for loading (for now)
      return {
        ...state,
        isFetching: true,
      };
    case REMOVE_FROM_CART:
    case ADD_ITEM_TO_CART:
      const updatedItem = {
          id: action.id,
          name: action.name,
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
    case BUY_ITEMS:
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
