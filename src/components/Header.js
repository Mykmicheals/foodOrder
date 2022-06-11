import React, { useState, useContext } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";
import AuthContext from "../store/authContext";

function Header() {
  const { totalUniqueItems } = useCart();

  const [showNav, setShow] = useState(false);

  const menuHandler = () => {
    setShow((showNav) => !showNav);
  };

  const closeNav = () => {
    setShow(false)
  }

  const authCtx = useContext(AuthContext)

let isLoggedIn = authCtx.isLoggedIn

  return (
    <div className="header">
      <Link to="/">
        <span className="logo">
          <i>
            <Icon icon="fluent:food-16-filled" inline={true} />
          </i>
          <h1>Foodieloo</h1>
        </span>
      </Link>
      <Navigation />

      {showNav && (
        <nav onClick={showNav} className="res-navigation">
          <div className="res-span">
            <Link to="/">
              <p>Home</p>
            </Link>
          </div>
          <span className="res-span">
            <NavLink activeClassName="active" to="/cart">
              <p>My Cart {totalUniqueItems}</p>
            </NavLink>
          </span>
          <span className="res-span">
            <Link to="/contact">
              <p>Contact</p>
            </Link>
          </span>
          {!isLoggedIn && 
            <span className="res-span">
            <NavLink activeClassName="active" to="/login">
              <p>Login</p>
            </NavLink>
          </span>
          }
          {isLoggedIn &&
            <span className="res-span">
              <NavLink activeClassName="active" to="/login">
                <span>Profile</span>
              </NavLink>
            </span>
          }
        </nav>
      )}

      <span onClick={menuHandler} className="icon">
        <span className="res-span">
          <Link to="/contact">
            <Icon icon="bx:menu-alt-right" />
          </Link>
        </span>
     
      </span>
    </div>
  );
}

export default Header;
