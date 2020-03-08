import React from "react";
import {useForm} from "react-hook-form"
import Button from "../component/signUp";
import axios from "axios";
require("../../public/css/mystyles.scss");

export default function SignUp() {
  const {
    register,
    errors,
    handleSubmit
  } = useForm();
 
  const onSubmit = (data) => {
    axios({
      url: 'saharaApi/userInfo/create/',
      method: 'post',
      data: {
        user_name: data.user_name,
        email_address: data.email_address,
        password: data.password
      }
    }).then(response => {
      if (response.status === 200) {
        location.href = '/'
      }
    });
  }

  return (
    <div className="hero-body">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="columns is-centered">
          <div className="column is-4">
            <label className="label">UserName</label>
            <div className="control">
              <input className="input" ref={register} type="text" name="user_name" placeholder="Name" />
            </div>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-4">
            <label className="label">Email</label>
            <div className="control">
              <input className="input" ref={register} type="email" name="email_address" placeholder="Email" />
            </div>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-4">
            <label className="label">Password</label>
            <div className="control">
              <input className="input" ref={register} type="password" name="password" placeholder="Password" />
            </div>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-4">
            <label className="label">Confirm Password</label>
            <div className="control">
              <input className="input" ref={register} type="password" name="confirmPassword" placeholder="Password" />
            </div>
          </div>
        </div>
        <Button />
      </form>
    </div>
  );
}
