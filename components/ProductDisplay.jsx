import Link from "next/link";
import React from "react";
import products from "../database/products";
import ProductCard from "./ProductCard";

export default function ProductDisplay() {
  return (
    <div className="box">
      <h2>Product Name</h2>
      <p>Display all products here</p>
      <ul>
        {products &&
          products.map((product) => {
            <li key={product.variety}>
              <ProductCard
                category={product.category}
                subCategory={product.subCategory}
                variety={product.variety}
                img={product.imgs[0]}
              ></ProductCard>
            </li>;
          })}
      </ul>
    </div>
  );
}
