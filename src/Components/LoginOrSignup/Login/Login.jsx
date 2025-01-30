





// import React from 'react'
import { Button } from "../../Button/Button";
import "./Login.css";
// import {LoginImg} from "../../images/login.webp"
import { NavLink } from "react-router-dom";
import "./Login.css"

const Login = () => {
  return (
    <>
    {/* <div className="container ">
      <div className="container-fluid">
        <div className="row d-flex justify-content-center align-items-center">
         <div className="col-md-9 col-lg-6 col-xl-5">
         <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" alt="logginimg" 
          className="img-fluid"/>
         </div>
        </div> */}
        {/* <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form>
            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
              <p className="lead fw-normal mb-0 me-3">Sign in With</p>
              <button
                    type="button"
                   className="btn btn-primary "
                  >
                    <i className="fa fa-facebook"></i> 
                  </button>
                  <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-linkedin-in"></i>
                  </button>
                  <div className="divider d-flex align-items-center my-4">
                    <p className="text-center fw-bold mx-3 mb-0"> Or</p>
                  </div> */}
                  {/* email */}
                  {/* <div className="form-outline mb-4">
                  <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="formEmail" className="form-control from-control-lg" placeholder="Enter Valid Email" />
                    
                  </div> */}
                  {/* password */}
                  {/* <div>
                  <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control form-control-lg" placeholder="Enter Password" />
                     */}
                   
                  {/* </div>
                  <div className="d-flex justify-content-between align-items-center">
                    {/* checkbox */}
                    {/* <div className="form-check mb-0">
                      <input type="checkbox" value="" className="form-check-input me-2" />
                      <label htmlFor="check" className="form-check-label">
                        Remember me
                      </label> */} 
                    {/* </div>
                    <NavLink className="text-body">Forgot Password</NavLink>
                  </div>
            </div>
          </form>
        </div>
      </div>
    </div> */}
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
            <br /><br />
            <div className="d-flex justify-content-between ">
              <NavLink to="/signup">SignUp</NavLink>
              <NavLink to="forget">Forget Password</NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
