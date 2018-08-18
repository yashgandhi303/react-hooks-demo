import { connect } from 'react-redux';
import Home from '../components/Home';

const mapStateToProps = (state /*, ownProps */) => ({
  loading: state.storeStock.isFetching,
  storeStock: state.storeStock,
  cartItems: state.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  addItemToCartFn: (item, amt) => {
    dispatch({
      type: 'ADD_TO_CART',
      item,
      amt,
    })
  },
  getItemsInStock: () => {
    dispatch({ type: 'FETCH_CART_ITEMS' });
  }
});

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;
