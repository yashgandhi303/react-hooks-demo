import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { buyItems /*, removeFromCart */ } from '../actions/actionCreators';
import { Link } from 'react-router-dom';
import Item from '../components/Item';

const Cart = ({ cartItems, buyAll, remove }) => (
  <div className="cart-div">
    <h3>Your cart: </h3>
    <p>Item count: {cartItems.length}</p>

      { console.log('Cart props: ', cartItems) }
    <div>
      { cartItems.length && cartItems.map((item) => (
          <Item onClickFn={remove} item={item} key={item.id} />
        )) || <Link to='/'>Go buy stuff</Link>
      }
    </div>


    {/* button to buy items and make cart go empty */}
    <button onClick={buyAll} disabled={!cartItems.length}>Buy all</button>
  </div>
);

Cart.propTypes = {
  buyAll: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
};

function getArrayOfCartItems(cartItems, ids) {
  const arr = [];
  console.log('getArrayOfCartItems ', cartItems, ids);
  for (let item in cartItems) {
    // console.log('item: ', item);
    if (ids.includes(item)) {
      arr.push(cartItems[item]);
    }
  }
  // console.log('getArrayOfCartItems: ', arr);
  return arr;
}

const mapStateToProps = (state, ownProps) => ({
  cartItems: getArrayOfCartItems(state.cartItems.cartItemStock, state.cartItems.cartItemIds)
});

const mapDispatchToProps = (dispatch) => ({
  buyAll: () => {
    // TODO: dispatch a 'BUY_ITEMS' event below
    dispatch({ type: 'BUY_CART_ITEMS' }) //buyItems());
  },
  remove: (item, amt) => {
    dispatch({ type: 'REMOVE_ITEM_FROM_CART', item, amt}) //removeFromCart(itemId, amt));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
