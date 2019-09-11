import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Container, Divider, Flag, Grid, Header, Loader} from 'semantic-ui-react';
import ItemCard, {IItem} from './ItemCard';
import {useAppState} from '../providers/AppProvider';

const Home: React.FC = () => {
  let {state, addToCart} = useAppState();
  const {cartItems, loading, stockItems} = state;

  function addItemToCart(item: IItem, amt: number) {
    addToCart(item, amt);
  }

  if (loading) {
    return <Loader content="Loading" />;
  }

  return (
    <Container className="home-div">
      <Header as="h1">
        <Flag name={'us'} />
        Welcome to Carrinho &nbsp;
        <Flag name={'br'} />
      </Header>

      {cartItems && Object.keys(cartItems).length > 0 && (
        <Button as={Link} to={'/cart'}>
          Go to Cart
        </Button>
      )}

      <Header as="h4">Number of items in cart: {Object.keys(cartItems).length}</Header>

      <Divider />

      <Header as="h4">Store Stock:</Header>

      {stockItems && Object.keys(stockItems).length > 0 ? (
        <Grid container stackable className={'item-grid'}>
          {Object.entries(stockItems).map(([id, item]) => (
            <Grid.Column mobile={16} tablet={8} computer={4} key={id}>
              <ItemCard key={id} item={item} location={'home'} onClickFn={addItemToCart} />
            </Grid.Column>
          ))}
        </Grid>
      ) : (
        <p>No items in stock</p>
      )}
    </Container>
  );
};

export default Home;
