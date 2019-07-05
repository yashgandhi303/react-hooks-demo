import React from 'react';
import ReactDOM from 'react-dom';
import "react-toggle/style.css";
import 'semantic-ui-css/semantic.min.css';
import { isDev } from './constants/config';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById("root");

if (isDev) {
  const axe = require('react-axe');
  axe(React, ReactDOM, 2000);
}

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<App />, rootElement);
} else {
  ReactDOM.render(<App />, rootElement);
}

registerServiceWorker();
