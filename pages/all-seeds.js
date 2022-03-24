import CategoryFilters from "../components/CategoryFilters";
import SearchBar from "../components/SearchBar";
import ConditionFilters from "../components/ConditionFilters";
import PriceFilters from "../components/PriceFilters";
import ProductDisplay from "../components/ProductDisplay";
import products from "../database/products";
import { useEffect, useState } from "react";

export default function AllSeeds() {
  const [category, setCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState(null);
  const [typeConditions, setTypeConditions] = useState({
    organic: false,
    openPollinated: false,
    hybrid: false,
  });
  const [climateConditions, setClimateConditions] = useState({
    sunny: false,
    dry: false,
    shady: false,
  });

  useEffect(() => {
    console.log(products[0]);
    console.log(typeConditions);
  });

  // console.log(products);
  return (
    <div>
      <CategoryFilters
        category={category}
        setCategory={setCategory}
      ></CategoryFilters>
      <SearchBar setSearchTerm={setSearchTerm}></SearchBar>
      <ConditionFilters
        setTypeConditions={setTypeConditions}
        setClimateConditions={setClimateConditions}
      ></ConditionFilters>
      <PriceFilters></PriceFilters>
      <ProductDisplay
        category={category}
        searchTerm={searchTerm}
        typeConditions={typeConditions}
        climateConditions={climateConditions}
      ></ProductDisplay>
    </div>
  );
}
