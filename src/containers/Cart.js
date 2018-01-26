import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Button, Header, Grid /*,  Divider, , Flag, Dimmer, Loader*/ } from 'semantic-ui-react';
import ItemCard from '../components/ItemCard';

const Cart = ({ cartItems, buyAll, remove }) => (
  <Container>
    <Header as="h2">Your cart: </Header>

    <Header as="h4">Item count: {cartItems.length}</Header>

    { console.log('Cart props: ', cartItems) }

    <Grid>
      <Grid.Column width={6}>
        { (
          // FIXME: formatting - this is ugly!!!
            cartItems.length && cartItems.map((item) => (
              <ItemCard
                onClickFn={remove}
                item={item}
                id={item.id}
                key={item.id}
                location={"cart"}
              />
            ))
          ) || (
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
  remove: PropTypes.func.isRequired
};

// TODO: refactor this
function getArrayOfCartItems(cartItems, ids) {
  const arr = [];
  console.log('getArrayOfCartItems ', cartItems, ids);
  for (let item in cartItems) {
    if (ids.includes(item)) {
      arr.push(cartItems[item]);
    }
  }
  return arr;
}

const mapStateToProps = (state, ownProps) => ({
  cartItems: getArrayOfCartItems(state.cartItems.cartItemStock, state.cartItems.cartItemIds)
});

const mapDispatchToProps = (dispatch) => ({
  buyAll: () => {
    dispatch({ type: 'BUY_CART_ITEMS' })
  },
  remove: (item, amt) => {
    dispatch({ type: 'REMOVE_ITEM_FROM_CART', item, amt})
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
