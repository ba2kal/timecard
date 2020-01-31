import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Login from "./routes/Login";
import Index from "./routes/Index";
import Navigation from "./component/Navigation";

function Router() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Index} />
      <Route path="/login" exact={true} component={Login} />
    </HashRouter>
  );
}

export default Router;
