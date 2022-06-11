import React, { useContext,useState } from "react";
import { Icon } from "@iconify/react";
import { Link, NavLink,useNavigate } from "react-router-dom";
import CartContext from "../store/cartContext";
import { useCart } from "react-use-cart";
import AuthContext from "../store/authContext";

function Navigation() {
  const [showLoginNav,setShowLoginNav] = useState(false)
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

  const loginNavHandler = () => {
    setShowLoginNav(showLoginNav=>!showLoginNav)
  }
  const overLayHandler = () => {
    setShowLoginNav(false)
  }

  return (
    <nav className="navigation">
      <span className="nav-span">
        <NavLink activeClassName="active" to="/">
          <span>Home</span>
        </NavLink>
      </span>
      <span className="nav-span">
       
          <span onClick={cartHandler}>My Cart <span id='cart-number'>{totalUniqueItems}</span>
        </span>
     
      </span>
      <span className="nav-span">
        <NavLink activeClassName="active" to="/contact">
          <span>Contact</span>
        </NavLink>
      </span>

      <span className='account-icon nav-span'>
        <div>
          <i onClick={loginNavHandler}>  <Icon icon="ant-design:user-outlined" inline={true} /></i>
        </div>
       
       {showLoginNav && <div onClick={overLayHandler} className='account-overlay'>
          {!isLoggedIn && <Link to='/login'>
            <p>login</p>
          </Link>}
         {!isLoggedIn && <Link to='/signup'>
            <p>Signup</p>
          </Link> }
          {isLoggedIn && <p>Profile</p>}
          {isLoggedIn && <p onClick={logoutHandler}>logout</p>}
        </div>}
       
   </span>
      
    </nav>
  );
}

export default Navigation;
