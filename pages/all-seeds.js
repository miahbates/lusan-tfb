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
  const [organic, setOrganic] = useState(false);
  const [openPollinated, setOpenPollinated] = useState(false);
  const [hybrid, setHybrid] = useState(false);

  // const [typeConditions, setTypeConditions] = useState({
  //   organic: false,
  //   openPollinated: false,
  //   hybrid: false,
  // });
  // const [climateConditions, setClimateConditions] = useState({
  //   sunny: false,
  //   dry: false,
  //   shady: false,
  // });

  useEffect(() => {
    console.log(products[0]);
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
        setOrganic={setOrganic}
        setOpenPollinated={setOpenPollinated}
        setHybrid={setHybrid}
      ></ConditionFilters>
      <PriceFilters></PriceFilters>
      <ProductDisplay
        category={category}
        searchTerm={searchTerm}
        organic={organic}
        openPollinated={openPollinated}
        hybrid={hybrid}
      ></ProductDisplay>
    </div>
  );
}
