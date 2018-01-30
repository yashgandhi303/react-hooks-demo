import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';

// import configureStore from './store';

import Home from './containers/Home';
import About from './containers/About';
import Cart from './containers/Cart';

import StyledHeader from './components/StyledHeader';
import AddItemForm from './components/AddItemForm';

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
            
            {/* /admin/* would be protected... */}
            <Route exact path='/admin/add-item' component={AddItemForm} />

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
    ${''/* global font size; can adjust in components using rem */}
    ${'' /* font-size: 10px; */}
    ${'' /* padding: 10px; */}
  }
`;

export default App;