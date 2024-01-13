import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.scss";

export default function Navigation() {
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
        <span>1</span>
      </NavLink>
    </nav>
  );
}
