import axios from 'axios';

class Api {

	static fetchItems() {
		const result = axios.get(`https://carrinho-15670.firebaseio.com/stockItems.json`)
			.then(res => {
			return res.data;
	});
		return result;
	}

	static addItemToCart(id, newStockAmt) {
		const result = axios.put(`https://carrinho-15670.firebaseio.com/stockItems/${id}/stock.json`, newStockAmt)
			.then(res => {
				return res.data;
			});
			return result;
	}

	// TODO: need to combine addItemToCart && removeItemFromCart
	static removeItemFromCart(id, newStockAmt) {
		const result = axios.put(`https://carrinho-15670.firebaseio.com/stockItems/${id}/stock.json`, newStockAmt)
			.then(res => {
				return res.data;
		});
		return result;
	}

	static addItemToStock(item) {
		const result = axios.post(`https://carrinho-15670.firebaseio.com/stockItems.json`, item)
			.then(res => {
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