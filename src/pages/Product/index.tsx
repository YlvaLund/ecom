import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ShoppingContext } from "../../context/shoppingContext";
import { getProduct } from "../../client/online_store";
import { ProductModel } from "../../models/models";
import "./product.scss";
import Button from "../../components/Button";

// Product

export default function Product() {
  const [productData, setProductData] = useState<ProductModel | null>();
  const shop = useContext(ShoppingContext);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await getProduct(id ?? "");
      if (res?.status === 200) {
        setProductData(res.data);
      }
    };
    if (id) {
      fetchProduct();
    }

    return () => {
      setProductData(null);
    };
  }, [id]);

  let fullprice = productData?.price;
  let discounted = productData?.discountedPrice;
  let discount = (fullprice ?? 0) - (discounted ?? 0);
  // Make sure the discount is not over two decimals also
  discount = Math.floor(discount * 100) / 100;

  return (
    <div className="product__container">
      <img src={productData?.imageUrl} alt={productData?.title} />
      <div className="product__description">
        <h1>{productData?.title}</h1>
        <p>{productData?.description}</p>
        <div className="product__tags">
          {productData?.tags?.map((t) => (
            <span>{t}</span>
          ))}
        </div>
        <div className="price__container">
          <strong>Price:</strong>
          <span className={"actual__price"}>{discounted ?? fullprice}</span>

          {discount > 0 && (
            <>
              <strong>Save:</strong>
              <span>{discount}</span>
              <strong className="fullprice">Price:</strong>
              <span className="fullprice">{fullprice}</span>
            </>
          )}
        </div>
        <Button
          type="cta"
          title="Add to Cart"
          path=""
          action={() => {
            shop?.addProduct(productData);
          }}
        />
        {(productData?.reviews?.length ?? 0) > 0 && (
          <>
            <div className="reviews__tool_tip">
              <strong>Reviews:</strong>
              <span>{productData?.reviews?.length ?? 0}</span>
              <strong>Rating:</strong>
              <span>{productData?.rating}</span>
            </div>
            <div className="reviews__container">
              {productData?.reviews?.map((r) => {
                let star = "*";
                let score = "";
                if (r.rating > 0) {
                  for (let i = 0; i < r.rating; i++) {
                    score += star;
                  }
                }
                return (
                  <div key={r.id} className="review">
                    <div>{r.description}</div>
                    <strong className="rating">{score}</strong>
                    <span>{r.username}</span>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
