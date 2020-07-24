import React from "react";
import Bcg from "../img/bcg-traffic.jpg";
import Googleimg from "../img/icons-google.png";
import Link from "./link.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Home = (props) => {
  return (
    <>
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
            <label className="form-check-label" for="exampleCheck1">
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
              <Link href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
            </div>
            <div className="col-md-2 col-lg-4 align-self-center mt-3 text-center">
              <Link href="#" className="google-icon">
                <img src={Googleimg} />
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Home;
