import { FETCH_ITEMS_IN_STOCK, ADD_TO_CART, REMOVE_FROM_CART, BUY_ITEMS, ADD_NEW_ITEM_TO_STOCK } from '../actions/actionTypes';
// import { storeListItems } from '../mockData';

// const initialStoreStock = storeListItems;
export const getItem = (state, id) => state[id];

const storeStock = (state = {stockItems: {}}, action) => {
  switch (action.type) {
    case FETCH_ITEMS_IN_STOCK:
      // change to only return items with stock > 0
      return {
        ...state,
        stockItems: action.payload
      };
    case BUY_ITEMS:
      // right now just going back to full stock; will update to subtract bought items
      // from store stock (if enough in stock)
      return {};
    // case REMOVE_FROM_CART:
    //   // remove item from cart, so add that quantity back
    //   return [
    //     ...state,
    //     action.payload
    //   ]
    // case ADD_TO_CART:
      // decrease count from item
      // return state.filter( item => item !== action.payload );
    // case ADD_NEW_ITEM_TO_STOCK:
    //   // is this needed?
    //   return [
    //     ...state,
    //     action.payload
    //   ]
    // case REMOVE_FROM_CART:
    //   if (state.id !== action.id) {
    //     return state;
    //   }
    //   return {
    //     ...state,
    //     inStore: !state.inStore,
    //   };
      // case CREATE_ITEM:
      //   return {
      //     name: action.name,
      //     id: action.id,
      //   };
    default:
      return state;
  }
};



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

export default storeStock;
