import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import getProducts from "../../client/online_store";
import { ProductModel } from "../../models/models";
import "./products.scss";

// Products

export default function Products() {
  const [allProducts, setAllProducts] = useState<ProductModel[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getProducts();
      if (res.status === 200) {
        setAllProducts(res.data);
      }
    };

    fetchProducts();

    return () => {
      setAllProducts([]);
    };
  }, [setAllProducts]);

  return (
    <div className="products__container">
      {allProducts.map((p) => {
        return <Card product={p} />;
      })}
    </div>
  );
}
