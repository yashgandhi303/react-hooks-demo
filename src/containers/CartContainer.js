import { connect } from 'react-redux';
import Cart from '../components/Cart';

// TODO: refactor this
function getArrayOfCartItems(cartItems, ids) {
  const arr = [];
  console.log('getArrayOfCartItems ', cartItems, ids);
  for (let item in cartItems) {
    if (ids.includes(item)) {
      arr.push(cartItems[item]);
    }
  }
  return arr;
}

const mapStateToProps = (state, ownProps) => ({
  cartItems: getArrayOfCartItems(state.cartItems.cartItemStock, state.cartItems.cartItemIds)
});

const mapDispatchToProps = (dispatch) => ({
  buyAll: () => {
    dispatch({ type: 'BUY_CART_ITEMS' })
  },
  remove: (item, amt, initialAmt) => {
    dispatch({ type: 'REMOVE_ITEM_FROM_CART', item, amt, initialAmt })
  }
});

const CartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);


export default CartContainer;