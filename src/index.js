import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Main from './routes';
import registerServiceWorker from './registerServiceWorker';

import store from './store';

import './assets/styles/main.css';


ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
