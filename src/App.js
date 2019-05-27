import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { AppContextProvider } from './hooks/AppProvider';
import Login from './components/Login';
import LoadingSpinner from './components/LoadingSpinner';

import Cart from './components/Cart';
import Home from './components/Home';
import Register from './components/Register';
import StyledHeader from './components/StyledHeader';

const About = lazy(() => import('./components/About'));
const AdminCP = lazy(() => import('./components/AdminCP'));

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
      <AppContextProvider>
        <BrowserRouter>
          <div>
            <StyledHeader authed={authed} />
            <div className='container'>
              <Suspense fallback={<LoadingSpinner />}>
                <Switch>
                  <Route exact path='/' component={Home} />

                  <PublicRoute authed={authed} exact path='/cart' component={Cart} />
                  <PublicRoute authed={authed} exact path='/register' component={Register} />
                  <PublicRoute authed={authed} exact path='/login' component={Login} />

                  {/* /admin/* would be protected... */}
                  <PublicRoute authed={authed} exact path='/admin' component={AdminCP} />

                  <PublicRoute authed={authed} exact path='/about' component={About} />

                  <Redirect to='/' />
                </Switch>
              </Suspense>
            </div>
          </div>
        </BrowserRouter>
      </AppContextProvider>
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
