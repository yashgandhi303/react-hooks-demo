import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { Container, Button, Header, Grid } from 'semantic-ui-react';
import ItemCard from '../components/ItemCard';
import { AppContext } from '../hooks/AppProvider';

const Cart = () => {
  const { state: { cartItems }, checkout , removeFromCart } = useContext(AppContext);

  function remove(item, amt) {
    removeFromCart(item, amt);
  }

  function buyAll() {
    checkout();
  }

  return (
      <Container>
        <Helmet>
          <title>Carrinho - cart</title>
        </Helmet>

        <Header as="h2">Your cart: </Header>

        <Header as="h3">Item count: {Object.keys(cartItems).length}</Header>

        <Grid>
          <Grid.Column width={6}>
            {
              Object.keys(cartItems).length > 0 ? (
                Object.entries(cartItems).map(([id, item]) => (
                  <ItemCard
                    onClickFn={remove}
                    item={item}
                    key={id}
                    location={'cart'}
                  />
                ))
              ) : (
                <Button
                  as={Link}
                  to={'/'}
                >
                  Go buy stuff
                </Button>
              )
            }
          </Grid.Column>

          <Grid.Column width={8} textAlign={'center'}>
            <Button onClick={buyAll} disabled={!Object.keys(cartItems).length} secondary>
              Buy all
            </Button>
          </Grid.Column>
        </Grid>
      </Container>
  )
};

export default Cart;
