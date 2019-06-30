import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { createGlobalStyle } from 'styled-components';

import { checkAuthStatus } from './auth';
import { SITE_URL } from './constants/config';
import * as ROUTES from './constants/routes';

import { AppContextProvider } from './providers/AppProvider';
import { AuthProvider } from './providers/AuthProvider';
import { ThemeContextProvider } from './providers/ThemeProvider';

import Cart from './components/Cart';
import Home from './components/Home';
import LoadingSpinner from './components/LoadingSpinner';
import Login from './components/Login';
import NoMatch from './components/NoMatch';
import Register from './components/Register';
import StyledHeader from './components/StyledHeader';

import "./styles.css";

const About = lazy(() => import('./components/About'));
const AdminCP = lazy(() => import('./components/AdminCP'));

function PrivateRoute ({ component: Component, user, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => checkAuthStatus(user) === false
        ? <Redirect to='/login' />
        : <Component {...props} />
      }
    />
  )
}

const App = () => (
  <AppContextProvider>
    <ThemeContextProvider>
      <AuthProvider render={ (authState) => {
        // TODO - find a better way to deal with the auth state
        return (
          <BrowserRouter>
            <div>
              <Helmet>
                <meta charSet="utf-8" />
                <title>Carrinho</title>
                <link rel="canonical" href={SITE_URL} />
              </Helmet>
              <StyledHeader authed={checkAuthStatus(authState.user)} setUser={authState.setUser} />
              <div className='container'>
                <Suspense fallback={<LoadingSpinner />}>
                  <Switch>
                    <Route exact path={ROUTES.HOME} component={Home} user={authState.user} />
                    <Route exact path={ROUTES.ABOUT} component={About} />
                    <Route user={authState.user} exact path={ROUTES.CART} component={Cart} />

                    {/* redirect home if user is already logged in */}
                    <Route exact path={ROUTES.REGISTER} render={(props) => (
                      checkAuthStatus(authState.user) === true
                        ? <Redirect to={ROUTES.HOME} />
                        : <Register {...props} />
                    )}
                    />
                    <Route exact path={ROUTES.LOGIN} render={(props) => (
                      checkAuthStatus(authState.user) === true
                        ? <Redirect to={ROUTES.HOME} />
                        : <Login {...props} setUser={authState.setUser} />
                    )}
                    />

                    {/* protected routes */}
                    <PrivateRoute user={authState.user} exact path={ROUTES.ADMIN} component={AdminCP} />

                    <Route component={NoMatch} />
                  </Switch>
                </Suspense>
              </div>
            </div>
          </BrowserRouter>
        );
      }} />
    </ThemeContextProvider>
  </AppContextProvider>
);


createGlobalStyle`
  body {
    background-color: ghostwhite;
  }
`;

export default App;
