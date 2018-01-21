import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Divider, Grid, Header, Flag, Dimmer, Loader } from 'semantic-ui-react';
// import AddItemForm from '../components/AddItemForm';
import ItemCard from '../components/ItemCard';
import Footer from '../components/Footer';

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
      <Grid divided>
        {
          this.props.storeStock.stockItems.map((item, index) => {
            return (
              <Grid.Column width={4}>

                <ItemCard
                  onClickFn={this.props.addItemToCartFn}
                  item={item}
                  key={item.id}
                />
              </Grid.Column>

            );
          })
        }
      </Grid>
    );
  }

  render() {
    const { cartItems, storeStock } = this.props;
    return (
      // <div id='home-div'>
      <Container className='home-div'>
        <Header as='h1'>
          Welcome to Carrinho &nbsp;
          <Flag name={'us'} />
          <Flag name={'br'} />
        </Header>
        
          <Link to="/cart">Go to Cart</Link>

          <Header as='h5'>Number of items in cart: {cartItems.cartItemIds.length}</Header>

          <Divider />
          {/* <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer> */}

          { console.log('Home props: ', this.props, storeStock.stockItems && storeStock.stockItems.length)}

          <Header as='h4'>Store Stock:</Header>

          {/* TODO: refactor into  component (aso, test below with no items - make sure dipslays the "no items in stock") */}
          {/* { (storeStock.stockItems && storeStock.stockItems.length && this.renderItems()) || <p>No items in stock</p> } */}

          { (storeStock.stockItems && storeStock.stockItems.length && this.renderItems()) || <p>No items in stock</p> }

          {/* <AddItemForm /> */}

          {/* <Footer /> */}
      {/* </div> */}
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
