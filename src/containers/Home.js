import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Divider, Grid, Header, Flag, Button, Dimmer, Loader } from 'semantic-ui-react';
import ItemCard from '../components/ItemCard';
// import Footer from '../components/Footer';

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
      <Grid divided container stackable>
        {
          this.props.storeStock.stockItems.map((item, index) => (
            <Grid.Column width={4} key={index}>
              <ItemCard
                onClickFn={this.props.addItemToCartFn}
                item={item}
                key={item.id}
                location={"home"}
              />
            </Grid.Column>
            )
          )
        }
      </Grid>
    );
  }

  render() {
    const { cartItems, storeStock } = this.props;
    return (
      <Container className='home-div'>
        <Header as='h1'>
          <Flag name={'us'} />        
          Welcome to Carrinho &nbsp;
          <Flag name={'br'} />
        </Header>
        
        {
          cartItems.cartItemIds.length > 0 && (
            <Button
              as={Link}
              to={"/cart"}
            >
              Go to Cart
            </Button>
          )
        }

        <Header as='h5'>Number of items in cart: {cartItems.cartItemIds.length}</Header>

        <Divider />

        <Header as='h4'>Store Stock:</Header>

        { this.props.loading && (
              <Dimmer active>
                <Loader content='Loading' />
              </Dimmer>
            )
          }

        { (storeStock.stockItems && storeStock.stockItems.length && this.renderItems()) || <p>No items in stock</p> }

        {/* <Footer /> */}
      </Container>
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

const mapStateToProps = (state /*, ownProps */) => {
  return {
    loading: state.storeStock.isFetching,
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
    })
  },
  getItemsInStock: () => {
    dispatch({ type: 'FETCH_CART_ITEMS' });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
