import { useContext } from "react";
import { ShoppingContext } from "../../context/shoppingContext";
import { ProductModel } from "../../models/models";
import Button from "../../components/Button";
import "./cart.scss";
// Cart

export default function Cart() {
  const { cart, removeProduct } = useContext(ShoppingContext);

  let totalAmount = 0;
  if (cart?.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      let price = cart[i].price ?? 0;
      totalAmount += price;
    }
  }

  // always make sure that the price is only 2 decimals.
  totalAmount = Math.floor(totalAmount * 100) / 100;

  return (
    <div>
      <div className="cart__container">
        <h1>Cart</h1>
        {cart?.map((product: ProductModel, i: number) => {
          return (
            <div key={i} className="product__viewer">
              <span>{product.title}</span>
              <span>{product.price}</span>
              <Button
                type="secondary"
                path=""
                title="Remove"
                action={() => {
                  removeProduct(product);
                }}
              />
            </div>
          );
        })}
        {cart?.length > 0 && (
          <>
            <div className="product__viewer product__total">
              <span>Total Price</span>
              <span>{totalAmount}</span>
            </div>
            <Button title="Settle Payment" action={() => {}} path="" type="submit cta" />
          </>
        )}
      </div>
    </div>
  );
}
