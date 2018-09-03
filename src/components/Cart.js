import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Button, Header, Grid } from 'semantic-ui-react';
import ItemCard from '../components/ItemCard';

const Cart = ({ cartItems, buyAll, remove }) => (
  <Container>
    <Header as="h2">Your cart: </Header>

    <Header as="h4">Item count: {cartItems.length}</Header>

    { console.log('Cart props: ', cartItems) }

    <Grid>
      <Grid.Column width={6}>
        {
            cartItems.length > 0 ? (
              cartItems.map((item) => (
              <ItemCard
                onClickFn={remove}
                item={item}
                id={item.id}
                key={item.id}
                location={"cart"}
              />
            ))
          ) : (
            <Button
              as={Link}
              to={"/"}
            >
              Go buy stuff
            </Button> 
          )
        }
      </Grid.Column>
      
      <Grid.Column width={8} textAlign={"center"}>
        {/* button to buy items and make cart go empty */}
        <Button onClick={buyAll} disabled={!cartItems.length} secondary>Buy all</Button>
      </Grid.Column>
    </Grid>
  </Container>
);

Cart.propTypes = {
  buyAll: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default Cart;
