import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';

// import configureStore from './store';

import Home from './routes/Home';
import About from './routes/About';
import Cart from './routes/Cart';

import StyledHeader from './components/StyledHeader';

import './App.css';

// const store = configureStore();
import store from './store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <StyledHeader />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/cart' component={Cart} />

            <Route exact path='/about' component={About} />

            <Redirect to='/' />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  </Provider>
);

injectGlobal`
  body {
    background-color: ghostwhite;
    padding: 10px;
  }
`;

export default App;