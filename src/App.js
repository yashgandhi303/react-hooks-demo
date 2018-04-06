import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';

// import configureStore from './store';
import { logout } from './auth';
import firebaseAuth from './store';

import Home from './containers/Home';
import About from './containers/About';
import Cart from './containers/Cart';
import Register from './containers/Register';
import Login from './containers/Login';

import StyledHeader from './components/StyledHeader';

import './App.css';

// const store = configureStore();
import store from './store';
import AdminCP from './containers/AdminCP';

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}

function PrivateRoute ({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location }}} />}
    />
  )
}

function PublicRoute ({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component { ...props } />
        : <Redirect to='/dashboard' />}
    />
  )
}

class App extends React.Component {
  // TODO: move all the auth logic to redux, sagas, etc. (global...)
  state = {
    authed: false,
    loading: false
  }
  // componentDidMount () {
  //   this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
  //     if (user) {
  //       this.setState({
  //         authed: true,
  //         loading: false,
  //       })
  //     } else {
  //       this.setState({
  //         authed: false,
  //         loading: false
  //       })
  //     }
  //   })
  // }
  // componentWillUnmount () {
  //   this.removeListener();
  // }

  render() {
    const { authed } = this.state;

    return (
      <Provider store={store}>
      <BrowserRouter>
        <div>
          <StyledHeader authed={authed} />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
  
              <PublicRoute authed={authed} exact path='/cart' component={Cart} />
              <PublicRoute authed={authed} exact path='/register' component={Register} />
              <PublicRoute authed={authed} exact path='/login' component={Login} />
  
              {/* /admin/* would be protected... */}
              {/* <PrivateRoute authed={authed} exact path='/admin' component={AdminCP} /> */}
              <PublicRoute authed={authed} exact path='/admin' component={AdminCP} />

              <PublicRoute authed={authed} exact path='/about' component={About} />
  
              <Redirect to='/' />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </Provider>  
    )
  }
}

injectGlobal`
  body {
    background-color: ghostwhite;
    ${''/* global font size; can adjust in components using rem */}
    ${'' /* font-size: 10px; */}
    ${'' /* padding: 10px; */}
  }
`;

export default App;