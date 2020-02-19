import React from "react";
import {Link} from  "react-router-dom"
import LoginComponent from "../component/Login"
require("../../public/css/mystyles.scss");

function Index() {
  return (
    <div className="hero-body">
      <div className="columns is-centered">
      <div className="column is-4">
        <p className="control has-icons-left has-icons-right">
          <input className="input" type="email" placeholder="Email" />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </p>
      </div>
      </div>
      <div className="columns is-centered">
      <div className="column is-4">
        <p className="control has-icons-left">
          <input className="input" type="password" placeholder="Password" />
          <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
          </span>
        </p>
      </div>
      </div>
      <div className="columns is-multiline is-centered">
        <LoginComponent/>
        <div className="column is-narrow">
          <Link to="/signUp"><button className="button is-primary">Sign Up</button></Link>
        </div>
      </div>
      <br/>
    </div>
  );
}

export default Index;
