import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/Reducer";

const store = createStore(reducer);
console.log("app:"+store.getState());
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
  <Router />
  </Provider>,
  rootElement
);
