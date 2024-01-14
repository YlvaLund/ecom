import { useContext, useEffect } from "react";
import { ShoppingContext } from "../../context/shoppingContext";
import Success from "./Success";
import "./payment.scss";
import Button from "../../components/Button";

// Payment

export default function Payment() {
  const shop = useContext(ShoppingContext);

  useEffect(() => {
    shop.clearCart();
  }, []);

  // Handle the clear cart

  return (
    <div className="payment__conatiner">
      <h1>Payment</h1>
      <Success />
      <div className="back__component">
        <Button path="/" action={() => {}} title="Back to our Products" type="" />
      </div>
      <p>For all your legal rights, please contact Noroff</p>
    </div>
  );
}
