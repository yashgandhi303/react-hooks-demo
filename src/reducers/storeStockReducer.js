import { FETCH_ITEMS_IN_STOCK, ADD_TO_CART, REMOVE_FROM_CART, BUY_ITEMS, ADD_NEW_ITEM_TO_STOCK, REQUEST_ITEMS_IN_STOCK, FETCH_CART_ITEMS } from '../actions/actionTypes';
// import { storeListItems } from '../mockData';

const initialState =  {
   isFetching: false,
   stockItems: []
 }

const storeStock = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_IN_STOCK:
      // change to only return items with stock > 0
      return {
        ...state,
        isFetching: false,
        stockItems: getStockItemsArray(action.payload)
      };
    case REQUEST_ITEMS_IN_STOCK:  // strictly for loading (for now)
      return {
        ...state,
        isFetching: true
      };
    case REMOVE_FROM_CART:
    case ADD_TO_CART:
      const updatedItem = {
        id: action.id,
        name: action.name,
        stock: action.stock
      };
      return {
        ...state,
        stockItems: [
          // TODO: need to do the slice thing (currently moving the item to the end of the array)
          ...state.stockItems.filter(item => item.id !== action.id),
          updatedItem
        ]
      };
    case FETCH_CART_ITEMS:
      return state;
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
  // console.log('index state: ', items);
  const stockItemsArray = [];
  for (let item in items) {
    // console.log(items[item]);
    // if (items[item].stock > 0) {
      stockItemsArray.push(items[item])
    // }
  }
  // console.log('final stockItemsArray', stockItemsArray);
  return stockItemsArray;
};

export default storeStock;



// export const getItem = (state, id) => state[id];
// export const getIds = (state) => state.ids;

// const byIds = (state, action) => {
//   //
// }


// export const getStockItems = (state) => {
//   console.log('index state: ', state);
//
//   const stockItemsArray [];
//
//   for (let item in stockItems) {
//     console.log(item);
//   }
//
//   return stockItemsArray;
//   // const ids = fromList.getIds(state.listByFilter[filter]);
//   // console.log('ids: ', ids);
//   // console.log('return array: ', ids.map(id => fromById.getTodo(state.byId, id)));
//   // return ids.map(id => fromById.getTodo(state.byId, id));
// };



// const storeStock = (state = initialStoreStock, action) => {
//   switch (action.type) {
//     case BUY_ITEMS:
//       // right now just going back to full stock; will update to subtract bought items
//       // from store stock (if enough in stock)
//       return initialStoreStock;
//     case REMOVE_FROM_CART:
//       // remove item from cart, so add back to store stock
//       return [
//         ...state,
//         action.payload
//       ]
//     case ADD_TO_CART:
//       // (actually "deletes" from store when adding to cart)
//       return state.filter( item => item !== action.payload );
//     case ADD_NEW_ITEM_TO_STOCK:
//       //
//       return [
//         ...state,
//         action.payload
//       ]
//     // case REMOVE_FROM_CART:
//     //   if (state.id !== action.id) {
//     //     return state;
//     //   }
//     //   return {
//     //     ...state,
//     //     inStore: !state.inStore,
//     //   };
//       // case CREATE_ITEM:
//       //   return {
//       //     name: action.name,
//       //     id: action.id,
//       //   };
//     default:
//       return state;
//   }
// };