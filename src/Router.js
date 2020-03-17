import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import SignUp from "./routes/SignUp";
import Main from "./routes/Main";
import TimeCard from "./routes/TimeCard";
import Index from "./routes/Index";
import Error from "./routes/Error";
import Footer from "./component/common/Footer";
import Header from "./component/common/Header";

export default function Router() {
    return (
        <BrowserRouter>
          <Header />
          <Route path="/" exact={true} component={Index} />
          <Route path="/signUp" exact={true} component={SignUp} />
          <Route path="/main" exact={true} component={Main} />
          <Route path="/error" exact={true} component={Error} />
          <Route path="/timeCard" exact={true} component={TimeCard} />
          <Footer />
        </BrowserRouter>
    );
}