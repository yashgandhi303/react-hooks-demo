import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { createGlobalStyle } from 'styled-components';

import { checkAuthStatus } from './auth';
import { SITE_URL } from './constants';

import { AppContextProvider } from './providers/AppProvider';
import { AuthProvider } from './providers/AuthProvider';
import { ThemeContextProvider } from './providers/ThemeProvider';

import Cart from './components/Cart';
import Home from './components/Home';
import Login from './components/Login';
import LoadingSpinner from './components/LoadingSpinner';
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
      <AuthProvider render={ (user) => (
        <BrowserRouter>
          <div>
            <Helmet>
              <meta charSet="utf-8" />
              <title>Carrinho</title>
              <link rel="canonical" href={SITE_URL} />
            </Helmet>
            <StyledHeader user={user} />
            <div className='container'>
              <Suspense fallback={<LoadingSpinner/>}>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route user={user} exact path='/cart' component={Cart} />

                  {/* redirect home if user is already logged in */}
                  <Route exact path='/register' render={(props) => (
                    checkAuthStatus(user) === true
                      ? <Redirect to='/' />
                      : <Register {...props} />
                    )}
                  />
                  <Route exact path='/login' render={(props) => (
                     checkAuthStatus(user) === true
                      ? <Redirect to='/' />
                      : <Login {...props} />
                    )}
                  />

                  {/* /admin is protected... */}
                  <PrivateRoute user={user} exact path='/admin' component={AdminCP} />

                  <Route component={NoMatch} />
                </Switch>
              </Suspense>
            </div>
          </div>
        </BrowserRouter>
      )} />
    </ThemeContextProvider>
  </AppContextProvider>
);


createGlobalStyle`
  body {
    background-color: ghostwhite;
  }
`;

export default App;
