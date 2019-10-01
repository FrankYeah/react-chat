import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'
import "./styles.css";
import "./styles.scss";

let store = createStore(todoApp)
var mountNode = document.getElementById("app");

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  mountNode
  );