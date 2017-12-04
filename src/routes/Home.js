import React from 'react';
import { Link } from 'react-router-dom';
// import Cart from '../routes/Cart';
import AddItemForm from '../components/AddItemForm';

const Home = () => (
  <div id='home-div'>
    <h1 id='welcome'>Welcome</h1>

      {/* <Cart /> */}
      <Link to="/cart">Cart</Link>

      <AddItemForm />
      {/* <Link to='dashboard'>dashboard route</Link> */}

  </div>
);


export default Home;
