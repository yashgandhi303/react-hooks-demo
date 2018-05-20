import { connect } from 'react-redux';
import AdminCP from '../components/AdminCP';

const mapStateToProps = (state /*, ownProps*/) => ({
  stock: state.storeStock.stockItems
});

const mapDispatchToProps = (dispatch) => ({
  getItemsInStock: () => {
    dispatch({ type: 'FETCH_CART_ITEMS' });
  }
});

const AdminCPContainer = connect(mapStateToProps, mapDispatchToProps)(AdminCP);

export default AdminCPContainer;