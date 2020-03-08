import React from "react";
import { Link } from "react-router-dom";
import Button from "../component/signUp";
require("../../public/css/mystyles.scss");

export default function SignUp() {
  return (
    <div className="hero-body">
      <form >
        <div className="columns is-centered">
          <div className="column is-4">
            <label className="label">UserName</label>
            <div className="control">
              <input className="input" type="text" placeholder="Name" />
            </div>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-4">
            <label className="label">Email</label>
            <div className="control">
              <input className="input" type="email" placeholder="Email" />
            </div>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-4">
            <label className="label">Password</label>
            <div className="control">
              <input className="input" type="password" placeholder="Password" />
            </div>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-4">
            <label className="label">Confirm Password</label>
            <div className="control">
              <input className="input" type="password" placeholder="Password" />
            </div>
          </div>
        </div>
        <Button />
      </form>
    </div>
  );
}
