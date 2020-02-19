import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router";

import { createStore } from "redux";
import { Provider } from "react-redux";
import buttonApp from "./reducers/Button";

const store = createStore(buttonApp);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  rootElement
);
