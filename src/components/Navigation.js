import React, { useContext } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import CartContext from "../store/cartContext";
import { useCart } from "react-use-cart";

function Navigation() {
  const { totalUniqueItems } = useCart();
  const cartCtx = useContext(CartContext);

  const cartHandler = (event) => {
    event.preventDefault();
    cartCtx.cartFunc();
  };

  return (
    <nav className="navigation">
      <span className="nav-span">
        <NavLink activeClassName="active" to="/">
          <span>Home</span>
        </NavLink>
      </span>
      <span className="nav-span">
        <NavLink activeClassName="active" to="cart">
        <span onClick={cartHandler}>My Cart <span id='cart-number'>{totalUniqueItems}
          </span> </span>
        </NavLink>     
      </span>
      <span className="nav-span">
      <NavLink activeClassName="active" to="/contact">
          <span>Contact</span>
        </NavLink>
      </span>
      <span className="nav-span">
        <NavLink activeClassName="active" to="/login">
          <span>Login</span>
        </NavLink>
      </span>
    </nav>
  );
}

export default Navigation;
