import axios from 'axios';
import {isDev} from './constants/config';
import {config} from './constants/firebaseConfig';
import {IItem} from './components/ItemCard';

const BASE_URL = config.databaseURL;
if (isDev) {
  console.info('BASE_URL: ', BASE_URL);
}

class Api {
  static fetchItems() {
    return axios.get(`${BASE_URL}/stockItems.json`).then(res => {
      return res.data;
    });
  }

  static buyItem(id: string, newStockAmt: number) {
    return axios.put(`${BASE_URL}/stockItems/${id}/stock.json`, newStockAmt).then(res => {
      return res.data;
    });
  }

  static buyItems(data: {[path: string]: number}) {
    return axios.patch(`${BASE_URL}/stockItems.json`, data).then(res => {
      return res.data;
    });
  }

  // TODO: need to combine addItemToCart && removeItemFromCart
  static removeItemFromCart(id: string, newStockAmt: number) {
    const result = axios.put(`${BASE_URL}/stockItems/${id}/stock.json`, newStockAmt).then(res => {
      return res.data;
    });
    return result;
  }

  static async addItemToStock(item: IItem) {
    return axios.post(`${BASE_URL}/stockItems.json`, item).then(res => res.data);
  }
}

export default Api;
