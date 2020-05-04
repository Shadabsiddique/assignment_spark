import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from "./reducer"

const initialState = {
    "Portugal": {
      "Aasiya Jayavant": false,
      "Luvleen Lawrence": false,
      "Rey Mibourne": false,
      "Cayla Brister":false,
    },
    "Nicaragua": {
      "Deveedaas Nandi": false,
      "Obasey Chidy": false,
      "Xenie Dolezelova": false,
      "Ezequiel Dengra":false,
    },
    "Marshall Islands" : {
      "Aaron Almaraz": false,
      "Jelena Denisova": false,
  
    }
}

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);