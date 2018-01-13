import axios from 'axios';

class Api {

    static fetchItems() {
        const result = axios.get(`https://carrinho-15670.firebaseio.com/stockItems.json`)
        .then(res => {
        //   console.log('res.data: ', res.data);
          return res.data;
        });
        return result;
    }

    static addItemToCart(id, newStockAmt) {
        console.warn('%c addItemToCart: ', id, newStockAmt);
        // console.log('%c a colorful message', 'background: green; color: white; display: block;');
        // console.log("%c addItemToCart: ', id, newStockAmt!", "background: green; color: blue; font-size:12px;"); 

        const result = axios.put(`https://carrinho-15670.firebaseio.com/stockItems/${id}/stock.json`, newStockAmt)
        .then(res => {
        //   console.log('res.data: ', res.data);
          return res.data;
        });
        return result;
    }

    // TODO: need to combine addItemToCart && removeItemFromCart
    static removeItemFromCart(id, newStockAmt) {
        const result = axios.put(`https://carrinho-15670.firebaseio.com/stockItems/${id}/stock.json`, newStockAmt)
        .then(res => {
        //   console.log('res.data: ', res.data);
          return res.data;
        });
        return result;
    }

    

    // static requestItems = () => ({
    //     // TODO: initiate spinner
    //     type: REQUEST_ITEMS_IN_STOCK
    //   });
      



} 

export default Api;