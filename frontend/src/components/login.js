import React, { useEffect } from "react";
import Bcg from "../img/bcg-traffic.jpg";
import Googleimg from "../img/icons-google.png";
import Link from "./link.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import GoogleLogin from "./googleLogin";
import FacebookLogin from "./facebookLogin";
import { getToken, loadUser } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import AutoSearch from "./googleAutocompleteSearch";

const Login = (props) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  if (isAuthenticated) {
    return <Redirect to="/" />;
  } else {
    dispatch(getToken());
    dispatch(loadUser());
  }
  return (
    <>
      {/* <AutoSearch/> */}
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
            <div className="col-md-12 col-lg-12 align-self-center mt-3 text-center">
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
