import React from "react";
import IndexComponent from "../component/index";
import { useForm } from "react-hook-form";
require("../../public/css/mystyles.scss");

export default function Index() {
  const {id, password} = useForm();
  return (
    <div className="hero-body">
      <form>
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
      <IndexComponent />
      </form>
      <br />
    </div>
  );
}
