import React from "react";

const Button = props => {
  const { loginFlg, signUp, cancel } = props;

  return (
    <div className="columns is-multiline is-centered is-mobile">
      <div className="column is-narrow">
          <button type="submit" className="button is-success">
            Submit
          </button>
      </div>
      <div className="column is-narrow">
          <button type="button" className="button is-primary" onClick={cancel}>
            Cancel
          </button>
      </div>
    </div>
  );
};

export default Button;
