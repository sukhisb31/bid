// import React from 'react'
import { Button } from "../../Button/Button";
import "./Login.css";
import { NavLink } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="container">
        <section className="">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-lg-12 col-xl-11">
                <div
                  className="card text-black"
                  style={{ borderRadius: "25px" }}
                >
                  <div className="card-body" style={{ height: "100vh" }}>
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Login
                        </p>

                        <form className="mx-1 mx-md-4">
                          <div className="d-flex flex-row align-items-center mb-3">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-3">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <label className="form-label" htmlFor="email">
                                Your Email :
                              </label>
                              <input
                                type="email"
                                id="email"
                                className="form-control"
                                name="email"
                              />
                              {/* {error.email && <span className="text-danger">{error.email}</span>} */}
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-3">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <label className="form-label" htmlFor="password">
                                Password :
                              </label>
                              <input
                                type="password"
                                id="password"
                                className="form-control"
                                name="password"
                              />
                              {/* {error.password && <span className="text-danger">{error.password}</span>} */}
                            </div>
                          </div>

                          {/* {error.termsAccepted && <span className="text-danger d-flex justify-content-center mb-3">{error.termsAccepted}</span>} */}

                          <div className="d-flex justify-content-center text-align-center mx-4 mb-3 mb-lg-4">
                            <Button>Login</Button>
                          </div>
                          <div className="changepg">
                            <div className="d-flex justify-content-between ">
                              <NavLink to="/signup">SignUp</NavLink>
                              <NavLink to="forget">Forget Password</NavLink>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div
                        className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2 mt-5"
                        style={{ flexDirection: "column" }}
                      >
                        <img
                          src="https://cdn.pixabay.com/photo/2019/12/16/10/30/iphone-4699057_1280.jpg"
                          className="img-fluid"
                          alt="Login_img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
