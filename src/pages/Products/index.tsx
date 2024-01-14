import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import getProducts from "../../client/online_store";
import { ProductModel } from "../../models/models";
import "./products.scss";

// Products

export default function Products() {
  const [allProducts, setAllProducts] = useState<ProductModel[]>([]);
  const [search, setSearch] = useState<string>("");

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
    <>
      <label className="product__filter">
        <span>Search</span>
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </label>
      <div className="products__container">
        {allProducts.map((p) => {
          if (search?.length > 0) {
            if (p.title.toLowerCase().includes(search.toLowerCase())) {
              // only return if the title is included
              return <Card product={p} />;
            }
            if (p.tags?.length > 0) {
              for (let t of p.tags) {
                if (t.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                  return <Card product={p} />;
                }
              }
            }
          } else {
            // We return everything if no search exist
            return <Card product={p} />;
          }
        })}
      </div>
    </>
  );
}
