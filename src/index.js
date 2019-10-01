import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import "./styles.css";
import "./styles.scss";

let store = createStore(todoApp)

class App extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

var mountNode = document.getElementById("app");

ReactDOM.render(
  <Provider store={store}>
    <App name="Frank"/>
  </Provider>,
  mountNode
  );