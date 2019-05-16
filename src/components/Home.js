import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Container, Divider, Flag, Grid, Header, Loader } from 'semantic-ui-react';
import ItemCard from '../components/ItemCard';

class Home extends React.Component {
  componentDidMount() {
    // call to fetch stockItems from firebase
    this.props.getItemsInStock();
  }

  render() {
    const { cartItems, loading, storeStock } = this.props;
    if (loading) return <Loader content='Loading' />;
    return (
      <Container className='home-div'>
        <Header as='h1'>
          <Flag name={'us'} />        
          Welcome to Carrinho &nbsp;
          <Flag name={'br'} />
        </Header>
        
        {
          cartItems.cartItemIds && cartItems.cartItemIds.length > 0 && (
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

        {
          storeStock.stockItems && storeStock.stockItems.length ?
            (
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
                  ))
                }
              </Grid>
            ) :
            <p>No items in stock</p>
        }

      </Container>
    )
  }
}

Home.propTypes = {
  addItemToCartFn: PropTypes.func.isRequired,
  getItemsInStock: PropTypes.func.isRequired,
  storeStock: PropTypes.shape({
    stockItems: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      stock: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }))
  }).isRequired,
};

export default Home;
