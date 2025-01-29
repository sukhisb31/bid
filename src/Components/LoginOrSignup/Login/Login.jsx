// import React from 'react'
import { Button } from "../../Button/Button";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="container">
        <div className="login_form">
          <h1 className="login">Login</h1>
          <form action="Login">
            <div className="mb-3">
              <label htmlFor="email" className="form-label d-flex">
                UserName or Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email or password"
              />
              <br />
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" />
            </div>
            <Button>Login</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
