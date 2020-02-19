import React from "react";
import { Link } from "react-router-dom"
import { connect } from "react-redux";

const Login = () => {
  return (
    <div className="column is-narrow">
      <Link to="/main">
        <button className="button is-success">Login</button>
      </Link>
    </div>
  );
};

export default Login;