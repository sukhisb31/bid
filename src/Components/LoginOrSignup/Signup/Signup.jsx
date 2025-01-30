import "./Signup.css";
import { NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
const Signup = () => {
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
                          Sign up
                        </p>

                        <form className="mx-1 mx-md-4">
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div
                              // data-mdb-input-init
                              className="form-outline flex-fill mb-0"
                            >
                              <label className="form-label" htmlFor="name">
                                Your Name
                              </label>

                              <input
                                type="text"
                                id="name"
                                className="form-control"
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div
                              // data-mdb-input-init
                              className="form-outline flex-fill mb-0"
                            >
                              <label className="form-label" htmlFor="email">
                                Your Email
                              </label>
                              <input
                                type="email"
                                id="email"
                                className="form-control"
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div
                              data-mdb-input-init
                              className="form-outline flex-fill mb-0"
                            >
                              <label className="form-label" htmlFor="password">
                                Password :
                              </label>
                              <input
                                type="password"
                                id="password"
                                className="form-control"
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div
                              data-mdb-input-init
                              className="form-outline flex-fill mb-0"
                            >
                              <label className="form-label" htmlFor="password">
                                Repeat your password :
                              </label>
                              <input
                                type="password"
                                id="password"
                                className="form-control"
                              />
                            </div>
                          </div>

                          <div className="form-check d-flex justify-content-center mb-5">
                            <input
                              className="form-check-input me-2"
                              type="checkbox"
                              value=""
                              id="checkbox"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkbox"
                            >
                              I agree all statements in{" "}
                              <NavLink to="">Terms of service</NavLink>
                            </label>
                          </div>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="button"
                              data-mdb-button-init
                              data-mdb-ripple-init
                              className="btn btn-primary btn-lg"
                            >
                              Register
                            </button>
                          </div>
                        </form>
                      </div>
                      <div
                        className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2 mt-5"
                        style={{ flexDirection: "column" }}
                      >
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                          className="img-fluid"
                          alt="Signup_img"
                        />
                        {/* another option to signup  */}
                        <div className="text-center mt-5">
                          <p>
                            Not a member? <NavLink to="/login">Login</NavLink>
                          </p>
                          <p>or sign up with:</p>
                          {/* icon */}
                          <button
                            type="button"
                            className="btn btn-link btn-floating mx-1"
                          >
                            <FaFacebookF />
                          </button>
                          <button
                            type="button"
                            className="btn btn-link btn-floating mx-1"
                          >
                            <FaTwitter />
                          </button>
                          <button
                            type="button"
                            className="btn btn-link btn-floating mx-1"
                          >
                            <FaGoogle />
                          </button>
                        </div>
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

export default Signup;
