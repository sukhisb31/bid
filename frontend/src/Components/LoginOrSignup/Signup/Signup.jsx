import "./Signup.css";
import { NavLink, Navigate } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";
import { useState } from "react";
import {Button} from "../../Button/Button";
import axios from "axios";
const Signup = () => {
  const initialValue = {
    name :"",
    email :"",
    password : "",
    confirmPassword : "",
    termsAccepted : false
  }
  const [formData, setFormData] = useState(initialValue);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validation = () =>{
    let errors = {};
    
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "required Email"
    }
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email format"
    }

    if (!formData.password) {
      errors.password = "password is required"
    }
    else if (formData.password.length < 6){
      errors.password = "Password must be at least 6 character or more"
    }

    if(!formData.confirmPassword){
      errors.confirmPassword = "Confirm Password is required"
    }
    else if (formData.confirmPassword !== formData.password){
      errors.confirmPassword = "Password do not match"
    }
    if (!formData.termsAccepted) {
      errors.termsAccepted = "You must accept the terms and conditions";
    }
    setError(errors);
    return Object.keys(errors).length === 0;
  };

// Handle Submit
  const handleSubmit = async(e) =>{
    e.preventDefault();
   

    
    
    try{
      const res = await axios.post("/api/users/register", {name,email,password,confirmPassword},{withCredentials:true});
      if(res.status === 201){
        Navigate("/login")
        
      }
    }catch(err){
      setError(err.response?.data?.message || "An error occurred");
      
    }
    if(validation()){
      // console.log("Form Submitted Successfully", formData);
      alert("Form Submit Successfully");
    }
    }


  // handle change
  const handleChange = (e) =>{
    setFormData({...formData, [e.target.name]: e.target.value});
  };
  
  

// // submit

 
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

                        <form className="mx-1 mx-md-4" >
                          <div className="d-flex flex-row align-items-center mb-3">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div
                              className="form-outline flex-fill mb-0"
                            >
                              <label className="form-label"  htmlFor="name">
                                Name :
                              </label>

                              <input
                                type="text"
                                id="name"
                                className="form-control"
                                 value={formData.name}
                                onChange={handleChange}
                                name="name"
                              />
                              {error.name && <span className="text-danger">{error.name}</span>}
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-3">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div
                              className="form-outline flex-fill mb-0"
                            >
                              <label className="form-label" htmlFor="email">
                                Email :
                              </label>
                              <input
                                type="email"
                                id="email"
                                className="form-control"
                                value={formData.email}
                                name="email"
                                onChange={handleChange}
                              />
                              {error.email && <span className="text-danger">{error.email}</span>}
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-3">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div
                              className="form-outline flex-fill mb-0"
                            >
                              <label className="form-label" htmlFor="password">
                                Password :
                              </label>
                              <input
                                type="password"
                                id="password"
                                className="form-control"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                              />
                              {error.password && <span className="text-danger">{error.password}</span>}
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div
                              data-mdb-input-init
                              className="form-outline flex-fill mb-0"
                            >
                              <label className="form-label" htmlFor="password">
                                Confirm password :
                              </label>
                              <input
                                type="password"
                                id="password"
                                className="form-control"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                              />
                              {error.confirmPassword && <span className="text-danger">{error.confirmPassword}</span>}
                            </div>
                          </div>

                          <div className="form-check d-flex justify-content-center mb-3">
                            <input
                              className="form-check-input me-2"
                              type="checkbox"
                              value=""
                              id="checkbox"
                              onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkbox"
                            >
                              I agree all statements in{" "}
                              <NavLink to="">Terms of service</NavLink>
                            </label>
                          </div>
                          {error.termsAccepted && <span className="text-danger d-flex justify-content-center mb-3">{error.termsAccepted}</span>}

                          <div className="d-flex justify-content-center text-align-center mx-4 mb-3 mb-lg-4">
                            <Button
                              type="button"
                              className="btn btn-primary btn-lg"
                              onClick={handleSubmit}
                              // disabled={loading}
                            >
                              Register
                            </Button>
                          </div>
                        </form>
                      </div>
                      <div
                        className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2  "
                        style={{ flexDirection: "column", width:"450px" }}
                      >
                        <img
                          src="https://img.freepik.com/free-vector/attached-files-concept-illustration_114360-4417.jpg?t=st=1738316224~exp=1738319824~hmac=f6b1884f748f916aa8a370545a25160dd1e8a0e4125a1f5a422ed61de66fc801&w=740"
                          className="img-fluid"
                          alt="Signup_img"
                        />
                        {/* another option to signup  */}
                        <div className="text-center ">
                          <p>
                            Already member? <NavLink to="/login">Login</NavLink>
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
