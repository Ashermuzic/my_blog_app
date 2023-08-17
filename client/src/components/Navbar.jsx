import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="links">
          <Link className="link" to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link className="link" to="/?cat=science">
            SCIENCE
          </Link>
          <Link className="link" to="/?cat=technology">
            TECHNOLOGY
          </Link>
          <Link className="link" to="/?cat=cinema">
            CINEMA
          </Link>
          <Link className="link" to="/?cat=design">
            DESIGN
          </Link>
          <Link className="link" to="/?cat=food">
            FOOD
          </Link>
          <span>John</span>
          <span>Logout</span>
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
