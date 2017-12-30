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



} 

export default Api;