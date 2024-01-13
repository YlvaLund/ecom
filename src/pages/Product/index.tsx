import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../client/online_store";
import { Product as model } from "../../models/models";
import "./product.scss";

// Product

export default function Product() {
  const [productData, setProductData] = useState<model | null>();
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await getProduct(id ?? "");
      console.log(res);
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
  return (
    <div className="product__container">
      <img src={productData?.imageUrl} alt={productData?.title} />
      <div>
        <h1>{productData?.title}</h1>
        <p>{productData?.description}</p>
        <div className="product__tags">
          {productData?.tags?.map((t) => (
            <span>{t}</span>
          ))}
        </div>
        <div className="reviews__tool_tip">
          <strong>Reviews:</strong>
          <span>{productData?.reviews?.length ?? 0}</span>
          <strong>Rating:</strong>
          <span>{productData?.rating}</span>
        </div>
        <div className="reviews__container">
          {productData?.reviews?.map((r) => {
            return (
              <div key={r.id}>
                <div>{r.description}</div>
                <strong>{r.rating}</strong>
                <span>{r.username}</span>
              </div>
            );
          })}
        </div>
      </div>
      {id}
    </div>
  );
}
