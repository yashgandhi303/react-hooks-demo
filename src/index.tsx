import React from 'react';
import ReactDOM from 'react-dom';
import 'react-toggle/style.css';
import 'antd/dist/antd.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById('root');

if (rootElement && rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<App />, rootElement);
} else {
  ReactDOM.render(<App />, rootElement);
}

registerServiceWorker();
