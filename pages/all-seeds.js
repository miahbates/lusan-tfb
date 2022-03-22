import CategoryFilters from "../components/CategoryFilters";
import SearchBar from "../components/SearchBar";
import ConditionFilters from "../components/ConditionFilters";
import PriceFilters from "../components/PriceFilters";
import ProductDisplay from "../components/ProductDisplay";
import products from "../database/dummy-data";

export default function AllSeeds() {
  console.log(products);
  return (
    <div>
      <CategoryFilters></CategoryFilters>
      <SearchBar></SearchBar>
      <ConditionFilters></ConditionFilters>
      <PriceFilters></PriceFilters>
      <ProductDisplay></ProductDisplay>
    </div>
  );
}
