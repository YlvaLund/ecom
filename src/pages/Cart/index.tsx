import { useContext } from "react";
import { ShoppingContext } from "../../context/shoppingContext";
import { ProductModel } from "../../models/models";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import "./cart.scss";
// Cart

export default function Cart() {
  const { cart, removeProduct } = useContext(ShoppingContext);
  const navigate = useNavigate();

  let totalAmount = 0;
  if (cart?.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      let price = cart[i].price ?? 0;
      let actualPrice = cart[i].discountedPrice ?? price;
      totalAmount += actualPrice;
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
              <Link to={`/products/${product.id}`}>
                <span>{product.title}</span>
              </Link>
              <span>{product.discountedPrice ?? product.price}</span>
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
        {cart?.length > 0 ? (
          <>
            <div className="product__viewer product__total">
              <span>Total Price</span>
              <span>{totalAmount}</span>
            </div>
            <Button title="Checkout" action={() => {}} path="/payment" type="submit cta" />
          </>
        ) : (
          <div>
            <p>Without any products here, we simply can not help you...</p>
            <p>Try adding some of our amazing products to your shopping cart!</p>
          </div>
        )}
      </div>
    </div>
  );
}
