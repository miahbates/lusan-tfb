import React from "react";
import products from "../database/products";
import { generateTags } from "../database/database-functions";
import dynamic from "next/dynamic";

console.log(products[0], "p");
console.log(products[0].providers[0].price, "p2");

const DynamicProductCard = dynamic(() => import("./ProductCard"), {
  ssr: false,
});

export default function ProductDisplay({
  category,
  searchTerm,
  organic,
  openPollinated,
  hybrid,
  sunny,
  shady,
  humid,
  lotsOfWater,
  dry,
  clay,
  drained,
  chalky,
  peaty,
  sandy,
  min,
  max,
}) {
  // useEffect(() => console.log(openPollinated));
  return (
    <div>
      <h2>Results</h2>
      <ul className="product-grid">
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
            .filter((product) => (sunny ? product.climate.sunny : product))
            .filter((product) => (shady ? product.climate.shady : product))
            .filter((product) => (humid ? product.climate.humid : product))
            .filter((product) => (lotsOfWater ? product.water.water : product))
            .filter((product) => (dry ? product.water.dry : product))
            .filter((product) => (clay ? product.soil.clay : product))
            .filter((product) => (drained ? product.soil.drained : product))
            .filter((product) => (chalky ? product.soil.chalky : product))
            .filter((product) => (peaty ? product.soil.peaty : product))
            .filter((product) => (sandy ? product.soil.sandy : product))
            .filter(
              (product) =>
                product.providers[0].price >= min &&
                product.providers[0].price <= max
            )
            .map((product) => (
              <li className="product-card" key={product.variety}>
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
