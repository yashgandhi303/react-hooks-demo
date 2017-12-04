import React from 'react';
// import { Link } from 'react-router-dom';

const Cart = (props) => (
  <div className="cart-div">
    <h3>Your cart: </h3>


    {/* have button to buy items and make cart go empty */}
    <button onClick={() => console.log('clicked on buy all')}>Buy all</button>
  </div>
);

export default Cart;
