import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import CartContainer from './containers/CartContainer';
import HomeContainer from './containers/HomeContainer';
import Login from './components/Login';
import LoadingSpinner from './components/LoadingSpinner';

import Register from './components/Register';
import StyledHeader from './components/StyledHeader';
import store from './store';

const About = lazy(() => import('./components/About'));
const AdminCPContainer = lazy(() => import('./containers/AdminCPContainer'));

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
    loading: false,
  };

  render() {
    const { authed } = this.state;

    return (
      <Provider store={store}>
      <BrowserRouter>
        <div>
          <StyledHeader authed={authed} />
          <div className='container'>
            <Suspense fallback={<LoadingSpinner />}>
              <Switch>
                <Route exact path='/' component={HomeContainer} />

                <PublicRoute authed={authed} exact path='/cart' component={CartContainer} />
                <PublicRoute authed={authed} exact path='/register' component={Register} />
                <PublicRoute authed={authed} exact path='/login' component={Login} />

                {/* /admin/* would be protected... */}
                {/* <PrivateRoute authed={authed} exact path='/admin' component={AdminCP} /> */}
                <PublicRoute authed={authed} exact path='/admin' component={AdminCPContainer} />

                <PublicRoute authed={authed} exact path='/about' component={About} />

                <Redirect to='/' />
              </Switch>
            </Suspense>
          </div>
        </div>
      </BrowserRouter>
    </Provider>  
    )
  }
}

createGlobalStyle`
  body {
    background-color: ghostwhite;
    ${'' /* font-size: 10px; */}
    ${'' /* padding: 10px; */}
  }
`;

export default App;
