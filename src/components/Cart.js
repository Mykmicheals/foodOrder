import React, { useContext, useState } from "react";
import { useCart } from "react-use-cart";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function Cart() {
  const {
    isEmpty,
    cartTotal,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();


  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <>
      <p>Your Shopping Cart</p>
      <div className="cart">
     
        {items.map((item) => (
          <div className="cart-inner">
            <img src={item.image} />
            <p>
          
              {item.quantity} x {item.name}
            </p>
       
            <span>N{item.price.toLocaleString()}</span>
 
            <input
              className="cart-input"
              type="number"
              min='0'
              value={item.quantity}
              onChange={(e) => updateItemQuantity(item.id, item.quantity=e.target.value)}         
            />
            <span onClick={() => removeItem(item.id)} className="cart-delete">
              <Icon icon="fluent:delete-16-regular" />
            </span>

       
          </div>
        ))}
      </div>
      <div className='cart-bottom'>
      <h2 className="cart-amount">
        Total Amount-N{cartTotal.toLocaleString()}
      </h2>
      <Link to='/payment'>
      <button className='btn'>Checkout</button>
      </Link>
    
      </div>
     

    </>
  );
}

export default Cart;
