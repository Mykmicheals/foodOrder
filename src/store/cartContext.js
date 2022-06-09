import React from "react";

const CartContext = React.createContext({
  cartOpen: false,
  filteredData: {},
});

export default CartContext;
