import React, {Suspense, lazy, useContext} from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  RouteProps,
  RouteComponentProps,
} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import {createGlobalStyle} from 'styled-components';

import {SITE_URL} from './constants/config';
import * as ROUTES from './constants/routes';

import {AppContextProvider} from './providers/AppProvider';
import {ThemeContextProvider} from './providers/ThemeProvider';
import AuthUserContext from './providers/AuthProvider';
import withAuthentication from './common/withAuthentication';

import Cart from './components/Cart';
import Home from './components/Home';
import LoadingSpinner from './components/LoadingSpinner';
import Login from './components/Login';
import NoMatch from './components/NoMatch';
import Register from './components/Register';
import StyledHeader from './components/StyledHeader';

import './styles.css';

const About = lazy(() => import('./components/About'));
const AdminCP = lazy(() => import('./components/AdminCP'));

interface IPrivateRouteProps extends RouteProps {
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  authUser: firebase.User | null;
}

const PrivateRoute: React.FC<IPrivateRouteProps> = ({component: Component, authUser, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props => (authUser ? <Component {...props} /> : <Redirect to={ROUTES.LOGIN} />)}
    />
  );
};

const App = () => {
  const authState = useContext(AuthUserContext);
  return (
    <AppContextProvider>
      <ThemeContextProvider>
        <BrowserRouter>
          <div>
            <Helmet>
              <meta charSet="utf-8" />
              <title>Carrinho</title>
              <link rel="canonical" href={SITE_URL} />
            </Helmet>
            <StyledHeader authUser={authState.authUser} />
            <div className="container">
              <Suspense fallback={<LoadingSpinner />}>
                <Switch>
                  <Route exact path={ROUTES.HOME} component={Home} />
                  <Route exact path={ROUTES.ABOUT} component={About} />
                  <Route exact authUser={authState.authUser} path={ROUTES.CART} component={Cart} />

                  {/* redirect home if user is already logged in */}
                  <Route
                    exact
                    path={ROUTES.REGISTER}
                    render={props =>
                      authState.authUser ? <Redirect to={ROUTES.HOME} /> : <Register {...props} />
                    }
                  />

                  <Route
                    exact
                    path={ROUTES.LOGIN}
                    render={props =>
                      authState.authUser ? <Redirect to={ROUTES.HOME} /> : <Login {...props} />
                    }
                  />

                  {/* protected routes */}
                  <PrivateRoute
                    exact={true}
                    authUser={authState.authUser}
                    path={ROUTES.ADMIN}
                    component={AdminCP}
                  />

                  <Route component={NoMatch} />
                </Switch>
              </Suspense>
            </div>
          </div>
        </BrowserRouter>
      </ThemeContextProvider>
    </AppContextProvider>
  );
};

createGlobalStyle`
  body {
    background-color: ghostwhite;
  }
`;

export default withAuthentication(App);
