import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../components/Cart';

const Home = () => (
  <div id='home-div'>
    <h1 id='welcome'>Welcome</h1>

    <h3>Links to the routes:</h3>

      <Link to='about'>about</Link>
      <Cart />
      {/* <Link to='dashboard'>dashboard route</Link> */}

  </div>
);


export default Home;
