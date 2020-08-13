import React from "react";
import Global from "../img/global.png";
import {Link} from "react-router-dom";
const Nav = () => {
  return (
    <>
      <nav className={"navbar navbar-expand-lg navbar-light bg-light"}>
        <Link className="navbar-brand" to="/">
          LOGO
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <Link className="nav-link" to='/offer'>Pogledaj ponude</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/create">Kreiraj ponudu</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Pregled vozača
              </Link>
            </li>
          </ul>
          <ul className="my-2 my-lg-0">
            <button type="button" className="btn btn-default btn-circle">
              <img src={Global} alt="global" />
            </button>
          </ul>
          <ul className="my-2 my-lg-0">
            <button type="button" className="btn btn-default btn-circle">
              Iconica
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
