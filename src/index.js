import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import WebFont from 'webfontloader';

import formReducer from './store/form';

import App from './components/App';

import './style/main.scss';

WebFont.load({
  google: {
    families: ['Roboto:400,500&display=swap'],
  },
});

const store = createStore(formReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
