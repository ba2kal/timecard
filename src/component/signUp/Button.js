import React from "react";
import { Link } from "react-router-dom";

const Button = props => {
  const { loginFlg, signUp, cancel } = props;

  return (
    <div className="columns is-multiline is-centered is-mobile">
      <div className="column is-narrow">
        <Link to="/">
          <button type="submit" className="button is-success" onClick={signUp}>
            Submit
          </button>
        </Link>
      </div>
      <div className="column is-narrow">
        <Link to="/">
          <button className="button is-primary" onClick={cancel}>
            Cancel
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Button;
