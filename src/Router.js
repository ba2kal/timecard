import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import SignUp from "./routes/SignUp";
import Main from "./routes/Main";
import Index from "./routes/Index";
import Footer from "./component/common/Footer";
import Header from "./component/common/Header";

export default function Router() {
    return (
        <BrowserRouter>
          <Header />
          <Route path="/" exact={true} component={Index} />
          <Route path="/signUp" exact={true} component={SignUp} />
          <Route path="/main" exact={true} component={Main} />
          <Footer />
        </BrowserRouter>
    );
}