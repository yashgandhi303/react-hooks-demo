import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import {Container, Button, Header, Grid} from 'semantic-ui-react';
import ItemCard, {IItem} from './ItemCard';
import Modal from './Modal';
import {useAppState, useAppDispatch} from '../providers/AppProvider';

const Cart: React.FC = () => {
  let {
    state: {cartItems},
    checkout,
  } = useAppState();

  let dispatch = useAppDispatch();

  // let cartItems = {};
  // if (state && state.hasOwnProperty('cartItems')) {
  //   cartItems = state.cartItems;
  // }

  // let removeFromCart = (item: IItem, amt: number): void => {};
  // let checkout = () => Promise.resolve(false);

  // if (context && context.hasOwnProperty('removeFromCart')) {
  //   removeFromCart = context.removeFromCart;
  // }
  // if (context && context.hasOwnProperty('checkout')) {
  //   checkout = context.checkout;
  // }

  const [showModal, setModalState] = useState(false);

  function remove(item: IItem, amt: number) {
    // removeFromCart(item, amt);
    dispatch({type: 'REMOVE_FROM_CART', payload: {amt, item}});
  }

  function buyAll() {
    const success = checkout();
    if (success) {
      setModalState(!showModal);
    }
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
          {Object.keys(cartItems).length > 0 ? (
            Object.entries(cartItems).map(([id, item]) => (
              <ItemCard key={id} item={item} location={'cart'} onClickFn={remove} />
            ))
          ) : (
            <Button as={Link} to={'/'}>
              Go buy stuff
            </Button>
          )}
        </Grid.Column>

        <Grid.Column width={8} textAlign={'center'}>
          <Button onClick={buyAll} disabled={!Object.keys(cartItems).length} secondary>
            Buy all
          </Button>
        </Grid.Column>
      </Grid>

      {showModal && (
        <Modal>
          <div>
            <h1>Congrats! You bought the items!</h1>
            <p>
              Go back to <Link to={'/'}>home</Link> to buy more
            </p>
            <Button onClick={() => setModalState(!showModal)}>back to cart</Button>
          </div>
        </Modal>
      )}
    </Container>
  );
};

export default Cart;
