import CategoryFilters from "../components/CategoryFilters";
import SearchBar from "../components/SearchBar";
import ConditionFilters from "../components/ConditionFilters";
import PriceFilters from "../components/PriceFilters";
import ProductDisplay from "../components/ProductDisplay";
import { useEffect, useState } from "react";
import {
  useSearchContext,
  SearchContext,
} from "../components/context/SearchbarContext";
import {
  useWishListContext,
  WishListContext,
} from "../components/context/WishListContext";

export default function AllSeeds() {
  const [searchTerm, setSearchTerm] = useSearchContext(SearchContext);
  const [category, setCategory] = useState("All");
  // type states
  const [organic, setOrganic] = useState(false);
  const [openPollinated, setOpenPollinated] = useState(false);
  const [hybrid, setHybrid] = useState(false);
  // climate states
  const [sunny, setSunny] = useState(false);
  const [shady, setShady] = useState(false);
  const [humid, setHumid] = useState(false);
  // water states
  const [lotsOfWater, setLotsOfWater] = useState(false);
  const [dry, setDry] = useState(false);
  // soil states
  const [clay, setClay] = useState(false);
  const [drained, setDrained] = useState(false);
  const [chalky, setChalkey] = useState(false);
  const [peaty, setPeaty] = useState(false);
  const [sandy, setSandy] = useState(false);
  // price states
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10);
  // wishlist
  const [wishList, setWishList] = useWishListContext(WishListContext);

 useEffect(() => {
    setWishList(() => {
      const saved = JSON.parse(localStorage.getItem("wishlist"));
      return saved || [];
    });
  }, [setWishList]);

  useEffect(() => {
    console.log("wishlist", wishList);
  });

  return (
    <div>
      <CategoryFilters
        category={category}
        setCategory={setCategory}
      ></CategoryFilters>
      <SearchBar></SearchBar>
      <ConditionFilters
        setOrganic={setOrganic}
        setOpenPollinated={setOpenPollinated}
        setHybrid={setHybrid}
        setSunny={setSunny}
        setShady={setShady}
        setHumid={setHumid}
        setLotsOfWater={setLotsOfWater}
        setDry={setDry}
        setClay={setClay}
        setDrained={setDrained}
        setChalkey={setChalkey}
        setPeaty={setPeaty}
        setSandy={setSandy}
      ></ConditionFilters>
      <PriceFilters
        min={min}
        setMin={setMin}
        max={max}
        setMax={setMax}
      ></PriceFilters>
      <ProductDisplay
        searchTerm={searchTerm}
        wishList={wishList}
        setWishList={setWishList}
        min={min}
        max={max}
        category={category}
        organic={organic}
        openPollinated={openPollinated}
        hybrid={hybrid}
        sunny={sunny}
        shady={shady}
        humid={humid}
        lotsOfWater={lotsOfWater}
        dry={dry}
        clay={clay}
        drained={drained}
        chalky={chalky}
        peaty={peaty}
        sandy={sandy}
      ></ProductDisplay>
    </div>
  );
}
