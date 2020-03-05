import React from "react";
import { Link } from "react-router-dom";
  
const Button = (props) => {
    const {
      loginFlg,
      login
    } = props;

    return (
      <div className="columns is-multiline is-centered is-mobile">
        <div className="column is-narrow">
        <Link to="/main">
            <button className="button is-success" onClick={login}>Login</button>
            </Link>
        </div>
        <div className="column is-narrow">
          <Link to="/signUp">
            <button className="button is-primary">Sign Up</button>
          </Link>
        </div>
      </div>
    );
}

export default Button;