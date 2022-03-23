import CategoryFilters from "../components/CategoryFilters";
import SearchBar from "../components/SearchBar";
import ConditionFilters from "../components/ConditionFilters";
import PriceFilters from "../components/PriceFilters";
import ProductDisplay from "../components/ProductDisplay";
import products from "../database/products";
import { useEffect, useState } from "react";

export default function AllSeeds() {
  const [category, setCategory] = useState("all");

  useEffect(() => console.log(category));

  console.log(products);
  return (
    <div>
      <CategoryFilters
        category={category}
        setCategory={setCategory}
      ></CategoryFilters>
      <SearchBar></SearchBar>
      <ConditionFilters></ConditionFilters>
      <PriceFilters></PriceFilters>
      <ProductDisplay category={category}></ProductDisplay>
    </div>
  );
}
