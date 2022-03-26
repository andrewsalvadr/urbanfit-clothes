import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { render } from '@testing-library/react';
import Reducer from "../src/Store/Reducer"
import { createStore } from 'redux';
const store = createStore(Reducer)


ReactDOM.render(

  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

render()

