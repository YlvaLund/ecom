import React, { useContext, useEffect, useState } from "react";
import { ShoppingContext } from "../../context/shoppingContext";
import { NavLink } from "react-router-dom";
import "./navigation.scss";

export default function Navigation() {
  const { cart } = useContext(ShoppingContext);

  return (
    <nav>
      <NavLink to="/">
        <i className="fa-solid fa-cart-shopping"></i>
        <span>Home</span>
      </NavLink>
      <NavLink to="/contact">
        <i className="fa-solid fa-cart-shopping"></i>
        <span>Contact</span>
      </NavLink>
      <NavLink to="/cart">
        <i className="fa-solid fa-cart-shopping"></i>
        <span>Cart</span>(<span>{cart?.length}</span>)
      </NavLink>
    </nav>
  );
}
