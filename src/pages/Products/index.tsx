import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import getProducts from "../../client/online_store";
import { Product } from "../../models/models";
import "./products.scss";

// Products

export default function Products() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getProducts();
      console.log(res);
      if (res.status === 200) {
        setAllProducts(res.data);
      }
    };

    fetchProducts();

    return () => {
      setAllProducts([]);
    };
  }, [setAllProducts]);

  console.log(allProducts);
  return (
    <div className="products__container">
      {allProducts.map((p) => {
        console.log(p);
        return <Card product={p} />;
      })}
    </div>
  );
}
