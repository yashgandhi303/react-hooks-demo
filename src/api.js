import axios from 'axios';
import { config } from './fire';
const BASE_URL = config.databaseURL;
console.log('BASE_URL: ', BASE_URL);
class Api {
	static fetchItems() {
		const result = axios.get(`${BASE_URL}/stockItems.json`)
			.then(res => {
			return res.data;
	});
		return result;
	}

	static addItemToCart(id, newStockAmt) {
		const result = axios.put(`${BASE_URL}/stockItems/${id}/stock.json`, newStockAmt)
			.then(res => {
				return res.data;
			});
			return result;
	}

	// TODO: need to combine addItemToCart && removeItemFromCart
	static removeItemFromCart(id, newStockAmt) {
		const result = axios.put(`${BASE_URL}/stockItems/${id}/stock.json`, newStockAmt)
			.then(res => {
				return res.data;
		});
		return result;
	}

	static async addItemToStock(item) {
		return axios.post(`${BASE_URL}/stockItems.json`, item).res.data;
	}

	// static requestItems = () => ({
	//     // TODO: initiate spinner
	//     type: REQUEST_ITEMS_IN_STOCK
	//   });
} 

export default Api;