import React, { useContext } from "react";

import { NavLink,useNavigate } from "react-router-dom";
import CartContext from "../store/cartContext";
import { useCart } from "react-use-cart";
import AuthContext from "../store/authContext";

function Navigation() {
  const navigate = useNavigate()
  const { totalUniqueItems } = useCart();
  const cartCtx = useContext(CartContext);

  const cartHandler = (event) => {
    event.preventDefault();
    cartCtx.cartFunc();
  };
  const authCtx = useContext(AuthContext)
  var isLoggedIn = authCtx.isLoggedIn
  
  const logoutHandler = () => {
    authCtx.logout()
    navigate('/login')
  }

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
     {!isLoggedIn && <span className="nav-span">
        <NavLink activeClassName="active" to="/login">
          <span>Login</span>
        </NavLink>
      </span>}

      {isLoggedIn && <span className="nav-span">
        <NavLink activeClassName="active" to="/login">
          <span>Profile</span>
        </NavLink>
        
      </span>}
      {isLoggedIn && <span className="nav-span">
            <span onClick={logoutHandler}>Logout</span>
      </span>}
    </nav>
  );
}

export default Navigation;
