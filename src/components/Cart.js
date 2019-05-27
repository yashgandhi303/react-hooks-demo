import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Header, Grid } from 'semantic-ui-react';
import * as actions from '../actions/actionTypes';
import ItemCard from '../components/ItemCard';
import { AppContext } from '../hooks/AppProvider';

const Cart = () => {
  const { state: { cartItems }, dispatch } = useContext(AppContext);

  function remove(item, amt, initialAmt) {
    dispatch({
      type: actions.REMOVE_FROM_CART,
      payload: {
        amt,
        initialAmt,
        item,
      },
    })
  }

  function buyAll() {
    dispatch({
      type: actions.BUY_CART_ITEMS,
    })
  }

  return (
    <Container>
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
