import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container,Button,  Divider, Grid, Header, Flag, Dimmer, Loader } from 'semantic-ui-react';
import Item from '../components/Item';
import ItemCard from '../components/ItemCard';

const Cart = ({ cartItems, buyAll, remove }) => (
  <Container>
    <Header as="h2">Your cart: </Header>

    <Header as="h4">Item count: {cartItems.length}</Header>

      { console.log('Cart props: ', cartItems) }
    <div>
      { (cartItems.length && cartItems.map((item) => (
          //{/* <Item onClickFn={remove} item={item} key={item.id} /> */}
          <ItemCard
            onClickFn={remove}
            item={item}
            key={item.id}
            location={"cart"}
          />
        ))) || <Link to='/'>Go buy stuff</Link>
      }
    </div>

    {/* button to buy items and make cart go empty */}
    {/* <button onClick={buyAll} disabled={!cartItems.length}>Buy all</button> */}
    <Button onClick={buyAll} disabled={!cartItems.length} secondary>Buy all</Button>

  </Container>
);

Cart.propTypes = {
  buyAll: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
};

function getArrayOfCartItems(cartItems, ids) {
  const arr = [];
  console.log('getArrayOfCartItems ', cartItems, ids);
  for (let item in cartItems) {
    // console.log('item: ', item);
    if (ids.includes(item)) {
      arr.push(cartItems[item]);
    }
  }
  // console.log('getArrayOfCartItems: ', arr);
  return arr;
}

const mapStateToProps = (state, ownProps) => ({
  cartItems: getArrayOfCartItems(state.cartItems.cartItemStock, state.cartItems.cartItemIds)
});

const mapDispatchToProps = (dispatch) => ({
  buyAll: () => {
    // TODO: dispatch a 'BUY_ITEMS' event below
    dispatch({ type: 'BUY_CART_ITEMS' }) //buyItems());
  },
  remove: (item, amt) => {
    dispatch({ type: 'REMOVE_ITEM_FROM_CART', item, amt}) //removeFromCart(itemId, amt));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
