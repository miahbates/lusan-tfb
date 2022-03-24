import Link from "next/link";
import React from "react";
import products from "../database/products";
import ProductCard from "./ProductCard";
import { generateTags } from "../database/database-functions";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const DynamicProductCard = dynamic(() => import("./ProductCard"), {
  ssr: false,
});

export default function ProductDisplay({
  category,
  searchTerm,
  organic,
  openPollinated,
  hybrid,
  min,
  max,
}) {
  // useEffect(() => console.log(openPollinated));
  return (
    <div className="box">
      <h2>Product Name</h2>
      <p>Display all products here</p>
      <ul>
        {products &&
          products
            .filter((product) =>
              category === "All" ? product : product.category === category
            )
            .filter((product) =>
              searchTerm
                ? product.variety.includes(searchTerm) ||
                  product.subCategory.includes(searchTerm)
                : product
            )
            .filter((product) => (organic ? product.type.organic : product))
            .filter((product) =>
              openPollinated ? product.type.openPollinated : product
            )
            .filter((product) => (hybrid ? product.type.hybrid : product))
            .filter((product) => product.price >= min && product.price <= max)
            .map((product) => (
              <li key={product.variety}>
                <DynamicProductCard
                  category={product.category}
                  subCategory={product.subCategory}
                  variety={product.variety}
                  img={product.imgs[0]}
                  price={product.providers[0].price}
                  typeTags={generateTags(product.type)}
                  climateTags={generateTags(product.climate)}
                  waterTags={generateTags(product.water)}
                  soilTags={generateTags(product.soil)}
                ></DynamicProductCard>
              </li>
            ))}
      </ul>
    </div>
  );
}
