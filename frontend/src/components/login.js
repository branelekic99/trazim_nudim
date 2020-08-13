import React, { useEffect } from "react";
import Bcg from "../img/bcg-traffic.jpg";
import Googleimg from "../img/icons-google.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import GoogleLogin from "./googleLogin";
import FacebookLogin from "./facebookLogin";
import { getToken, loadUser } from "../actions";
import { useSelector, useDispatch } from "react-redux";
<<<<<<< HEAD
import { Redirect } from "react-router-dom";
import AutoSearch from "./googleAutocompleteSearch";
=======
import {Redirect} from 'react-router-dom';


>>>>>>> 289c15d6100b836dc29756729f6c1c60fa42a6ea

const Login = (props) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

<<<<<<< HEAD
  if (isAuthenticated) {
    return <Redirect to="/" />;
  } else {
=======
  useEffect(()=>{
>>>>>>> 289c15d6100b836dc29756729f6c1c60fa42a6ea
    dispatch(getToken());
    dispatch(loadUser());
  },[])

  if(isAuthenticated){
      return <Redirect to="/" />
  }
  
  return (
    <>
<<<<<<< HEAD
      {/* <AutoSearch/> */}
=======
>>>>>>> 289c15d6100b836dc29756729f6c1c60fa42a6ea
      <div className="bcg-image">
        <img src={Bcg} className="bcg-image" alt="Bcg" />
      </div>

      <div className="sv-login-modal">
        <div className="row">
          <div className="col-12 text-center mb-3">
            <h4>Login</h4>
          </div>
        </div>
        <form>
          <div className="row">
<<<<<<< HEAD
            <div className="col-md-12 col-lg-12 align-self-center mt-3 text-center btn-hover-facebook">
=======
            <div className="col-6 col-md-9 col-lg-12 col-xl-12 align-self-center">
              <input className="form-control" placeholder="Username"></input>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-md-9 col-lg-12 col-xl-12 align-self-center mt-3">
              <input className="form-control" placeholder="Password"></input>
            </div>
          </div>

          <div className="form-check mt-2">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Remember me
            </label>
          </div>

          <div className="row">
            <div className="col-6 col-md-9 col-lg-12 col-xl-12 align-self-center mt-3">
              <button className="form-control">Sing in</button>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 col-lg-4 align-self-center mt-3 text-center">
>>>>>>> 289c15d6100b836dc29756729f6c1c60fa42a6ea
              <FacebookLogin />
              {/* <Link href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </Link> */}
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-12 align-self-center mt-3 text-center google-button-login">
              <GoogleLogin />
              {/* <Link href="#" className="google-icon">
                <img src={Googleimg} />
              </Link> */}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
