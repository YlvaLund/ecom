import React from "react";
import "./card.scss";
import Button from "../Button";

export default function Card({ product }: any) {
  let productDescription: String = product?.description;
  if (productDescription?.length > 50) {
    productDescription = "" + productDescription.substring(0, 50) + "...";
  }
  return (
    <div className="product__card">
      <img src={product?.imageUrl} alt="" />
      <div className="card__content">
        <h3>{product?.title}</h3>
        <span className="product__price">{product?.price}</span>
        <p>{productDescription}</p>
      </div>
      <Button type="card" title="Details" path={`/products/${product.id}`} action={console.log} />
    </div>
  );
}
