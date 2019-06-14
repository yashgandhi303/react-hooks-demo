import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { Container, Button, Header, Grid } from 'semantic-ui-react';
import ItemCard from '../components/ItemCard';
import Modal from '../components/Modal';
import { AppContext } from '../providers/AppProvider';

const Cart = () => {
  const { state: { cartItems }, checkout , removeFromCart } = useContext(AppContext);
  const [showModal, setModalState] = useState(false);

  function remove(item, amt) {
    removeFromCart(item, amt);
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
            {
              Object.keys(cartItems).length > 0 ? (
                Object.entries(cartItems).map(([id, item]) => (
                  <ItemCard
                    key={id}
                    item={item}
                    location={'cart'}
                    onClickFn={remove}
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

        {
          showModal && (
            <Modal>
              <div>
                <h1>Congrats! You bought the items!</h1>
                <p>
                  Go back to <Link to={"/"}>home</Link> to buy more
                </p>
                <Button
                  onClick={() => setModalState()}
                >
                  back to cart
                </Button>
              </div>
            </Modal>
          )
        }
      </Container>
  )
};

export default Cart;
