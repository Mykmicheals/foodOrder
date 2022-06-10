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
        <nav className="res-navigation">
          <span className="res-span">
            <Link to="/">
              <p>Home</p>
            </Link>
          </span>
          <span className="res-span">
            <NavLink activeClassName="active" to="/cart">
              <span>My Cart {totalUniqueItems}</span>
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
              <span>Login</span>
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
        <Icon icon="bx:menu-alt-right" />
      </span>
    </div>
  );
}

export default Header;
