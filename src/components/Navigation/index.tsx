import { useContext } from "react";
import { ShoppingContext } from "../../context/shoppingContext";
import { NavLink } from "react-router-dom";
import "./navigation.scss";

export default function Navigation() {
  const { cart } = useContext(ShoppingContext);

  return (
    <nav>
      <div>
        <NavLink to="/">
          <i className="fa-solid fa-house"></i>
          <span>Home</span>
        </NavLink>
      </div>
      <div>
        <NavLink to="/contact">
          <i className="fa-solid fa-address-book"></i>
          <span>Contact</span>
        </NavLink>
        <NavLink to="/cart">
          <i className="fa-solid fa-cart-shopping"></i>
          <span>Cart</span>
          {cart?.length > 0 && <span className="cart__count">{cart?.length}</span>}
        </NavLink>
      </div>
    </nav>
  );
}
