import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addItemToCart, fetchItemsInStock } from '../actions/actionCreators';
import AddItemForm from '../components/AddItemForm';
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
  // need componentDidUpdate() ??

  renderItems() {
    return (
      this.props.storeStock.stockItems.map((item, index) => {
          // make below component (has name, count, etc)
          if (item.stock > 0) {
            // return <input type='button' value={item.name} onClick={this.props.addItemToCartFn} key={item.id} />
            return <Item onClickFn={this.props.addItemToCartFn} item={item} key={item.id} />
          }
        })
        // || <p>No items in stock</p>
    );
  }

  render() {
    const { cartItems, storeStock, addItemToCartFn } = this.props;
    return (
      <div id='home-div'>
        <h1 id='welcome'>Welcome</h1>

          <Link to="/cart">Go to Cart</Link>
          <p>Number of items in cart: {cartItems.length}</p>

          { console.log('Home props: ', this.props, storeStock.stockItems && storeStock.stockItems.length)}

          <h4>Store stock:</h4>

          {/* TODO: refactor into  component (aso, test below with no items - make sure dipslays the "no items in stock") */}
          {
            storeStock.stockItems && storeStock.stockItems.length && this.renderItems()
          }

          {/* <AddItemForm /> */}

      </div>
    )
  }
}

// storeStock: PropTypes.arrayOf(PropTypes.shape({
//   stockItems: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string.isRequired,
//   }))
//   completed: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired,
// }).isRequired).isRequired,

Home.propTypes = {
  // storeStock: PropTypes.object, // use shape ^^
  storeStock: PropTypes.shape({
    stockItems: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      stock: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }))
  }).isRequired,
  // cartItems: PropTypes.array,
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
    dispatch(addItemToCart(item, amt));
  },
  getItemsInStock: () => {
    dispatch(fetchItemsInStock());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
