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
  typeConditions,
  climateConditions,
}) {
  // useEffect(() => console.log(typeConditions));
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
            .filter((product) => {
              const keys = Object.keys(typeConditions);
              const trueKeys = keys.filter((key) => {
                if (typeConditions[key]) {
                  return key;
                }
              });
              console.log("truKeys", trueKeys);
              // console.log(product.type);
              // check if our product type object includes the truKeys
              // return an array of products that include the true keys
              const array = [];
              for (const key in product.type) {
                for (let i = 0; i < trueKeys.length; i++) {
                  if (key === trueKeys[i]) {
                    array.push(product);
                  }
                }
              }
              console.log("array", array);
              return array;

              // console.log(
              //   "filter",
              //   keys.filter((key) => typeConditions[key] === product.type[key])
              // );
              // console.log(keys);
              // keys.forEach((key) =>
              //   console.log("condition", {
              //     key: typeConditions[key],
              //     productKey: product.type[key],
              //   })
              // );
            })
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
