{/* <script src="https://www.gstatic.com/firebasejs/4.7.0/firebase.js"></script>
<script>
  // Initialize Firebase
  firebase.initializeApp(config);
</script> */}

// not hiding, so it's public
export const config = {
  apiKey: "AIzaSyCHOQX6AkwQwuPrZ3FKCLIrW_zmKUG-Vt0",
  authDomain: "carrinho-15670.firebaseapp.com",
  databaseURL: "https://carrinho-15670.firebaseio.com",
  projectId: "carrinho-15670",
  storageBucket: "",
  messagingSenderId: "396581801687"
};



// import * as firebase from 'firebase';
// import { config } from './fire';
//
// firebase.initializeApp(config);



/* 
    saving the below here for now (for testing and setup (in actionCreators))

 */

// function addInitialItems () {
//   const itemId = 'kns289k2';
//   database.ref(`stockItems/${itemId}`).set({
//     name: 'hot dogs',
//     stock: 0
//   });
// }
// addInitialItems();

// function alterItemStock(id, newStockAmt) {
//   const url = `https://carrinho-15670.firebaseio.com/stockItems/${id}/stock.json`;
//   axios.put(url, newStockAmt)
//     .then(res => {
//       console.log('asdfasdf', res.data);
//       // const itemsInStock = res.data;
//       return res.data;
//       // dispatch({
//       //     type: FETCH_ITEMS_IN_STOCK,
//       //     payload: itemsInStock
//       // });
//     })
//     .catch(err => {
//       console.error('error: ', err);
//       // dispatch({
//       //     type: ERROR,
//       //     payload: {"Error": err}
//       // })
//     });
// }
// alterItemStock('abc123', 3);

// function addInitialItems () {
//   database.ref('stockItems/').set({
//     items: [
//       {
//         id: 'abc123',
//         name: 'beer',
//         stock: 83
//       },
//       {
//         id: 'xyz456',
//         name: 'whiskey',
//         stock: 43
//       },
//       {
//         id: '4asd8az',
//         name: 'hot dogs',
//         stock: 0
//       },
//       {
//         id: '1kn92ks',
//         name: 'hamburgers',
//         stock: 27
//       }
//     ]
//   });
// }
