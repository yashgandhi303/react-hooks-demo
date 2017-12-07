import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addItemToCart } from '../actions/actionCreators';
import AddItemForm from '../components/AddItemForm';

const Home = (props) => (
  <div id='home-div'>
    <h1 id='welcome'>Welcome</h1>

      <Link to="/cart">Go to Cart</Link>
      <p>Number of items in cart: {props.cartItems.length}</p>

      { console.log('Home props: ', props, props.storeStock.length)}

      <h4>Store stock:</h4>
      <p>Click to add to cart</p>
      {/* TODO: refactor into  component  */}
      { props.storeStock && props.storeStock.length !== 0 && props.storeStock.map((item, index) => (
          <input type='button' value={item} onClick={props.addItemToCartFn} key={index} />
        ))
        || <p>No items in stock</p>
      }



      <AddItemForm />
      {/* <Link to='dashboard'>dashboard route</Link> */}

  </div>
);

Home.propTypes = {
  storeStock: PropTypes.array,
  cartItems: PropTypes.array
};

const mapStateToProps = (state, ownProps) => {
  return {
    storeStock: state.storeStock,
    cartItems: state.cartItems
  };
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCartFn: (e) => {
    dispatch(addItemToCart(e.target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
