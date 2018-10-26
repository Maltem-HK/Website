import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Favicon from 'react-favicon';
import store from './store/index';
import Application from './components/App';
import favicon from './assets/img/favicon.ico';
import './main.scss';

render(
  <Provider store={store()}>
    <div>
      <Favicon url={favicon} />
      <Application />
    </div>
  </Provider>,
  document.getElementById('app'),
);
