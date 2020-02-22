import React from "react";
import { Link } from "react-router-dom"
import { connect } from "react-redux";

const Button = () => {
  return (
    <div className="columns is-multiline is-centered">
    <div className="column is-narrow">
      <Link to="/main">
        <button className="button is-success">Login</button>
      </Link>
    </div>
    <div className="column is-narrow">
      <Link to="/signUp">
        <button className="button is-primary">Sign Up</button>
      </Link>
    </div>
    </div>
  );
};

export default Button;