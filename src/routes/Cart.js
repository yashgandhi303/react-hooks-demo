import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { buyItems, removeFromCart } from '../actions/actionCreators';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, buyAll, remove }) => (
  <div className="cart-div">
    <h3>Your cart: </h3>
    <p>Item count: {cartItems.length}</p>

      <div>
        {cartItems.length && cartItems.map((item, ind) => (
            <p onClick={() => remove(item)} key={ind}>{item}</p>
          )) || <Link to='/'>Go buy stuff</Link>
        }
      </div>


    {/* have button to buy items and make cart go empty */}
    <button onClick={buyAll} disabled={!cartItems.length}>Buy all</button>
  </div>
);

Cart.propTypes = {
  cartItems: PropTypes.array,
  buyAll: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  cartItems: state.cartItems
});

const mapDispatchToProps = (dispatch) => ({
  buyAll: () => {
    dispatch(buyItems());
  },
  remove: (item) => {
    dispatch(removeFromCart(item));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
