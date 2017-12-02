import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store';

import Home from './routes/Home';
import About from './routes/About';

import Header from './components/Header';
// import NoMatch from './components/NoMatch';

import './App.css';

const store = configureStore();


const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />

            <Route exact path='/about' component={About} />
            {/* <Route exact path='/dashboard' component={Dashboard} /> */}

            <Redirect to='/' />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
// if (module.hot) {
//    module.hot.accept('./print.js', function() {
//      console.log('Accepting the updated printMe module!');
//      printMe();
//    });
//  }
