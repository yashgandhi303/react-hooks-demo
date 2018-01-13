import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { addItemToCart /*, fetchItemsInStock*/ } from '../actions/actionCreators';
// import AddItemForm from '../components/AddItemForm';
import Item from '../components/Item';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nothing: true,
      uiState: 'maybe'
    }
  }

  componentDidMount() {
    // call to fetch stockItems for redux state
    this.props.getItemsInStock();
  }

  renderItems() {
    return (
      this.props.storeStock.stockItems.map((item, index) => {
        // if (item.stock > 0) {
          return <Item onClickFn={this.props.addItemToCartFn} item={item} key={item.id} />
        // }
      })
    );
  }

  render() {
    const { cartItems, storeStock, addItemToCartFn } = this.props;
    return (
      <div id='home-div'>
        <h1 id='welcome'>Welcome</h1>

          <Link to="/cart">Go to Cart</Link>
          <p>Number of items in cart: {cartItems.cartItemIds.length}</p>

          { console.log('Home props: ', this.props, storeStock.stockItems && storeStock.stockItems.length)}

          <h4>Store stock:</h4>

          {/* TODO: refactor into  component (aso, test below with no items - make sure dipslays the "no items in stock") */}
          { storeStock.stockItems && storeStock.stockItems.length && this.renderItems() || <p>No items in stock</p> }

          {/* <AddItemForm /> */}

      </div>
    )
  }
}

Home.propTypes = {
  storeStock: PropTypes.shape({
    stockItems: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      stock: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }))
  }).isRequired,
  addItemToCartFn: PropTypes.func.isRequired,
  getItemsInStock: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    storeStock: state.storeStock,
    cartItems: state.cartItems
  };
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCartFn: (item, amt) => {
    dispatch({
      type: 'ADD_TO_CART',
      item,
      amt
    }) // );  // addItemToCart(item, amt)
  },
  getItemsInStock: () => {
    dispatch({ type: 'FETCH_CART_ITEMS' }); // fetchItemsInStock());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
