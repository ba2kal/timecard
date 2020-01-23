import React from "react";
import ReactDOM from "react-dom";
import TimeCard from "./component/TimeCard";
require('../public/scss/mystyles.scss');

const rootElement = document.getElementById("root");
ReactDOM.render(<TimeCard/>, rootElement);