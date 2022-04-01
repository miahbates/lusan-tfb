import Link from "next/link";
import React from "react";
import StyledTab from "./styled-components/StyledTab";
import StyledTabButton from "./styled-components/StyledTabButton";
import { useSearchContext, SearchContext } from "./context/SearchbarContext";

export default function CategoryFilters({ setCategory, category }) {
  const [allClicked, isAllClicked] = React.useState(false);
  const [vegClicked, isVegClicked] = React.useState(false);
  const [flowerClicked, isFlowerClicked] = React.useState(false);
  const [herbClicked, isHerbClicked] = React.useState(false);
  const [searchTerm, setSearchTerm] = useSearchContext(SearchContext);

  return (
    <StyledTab className="filter-box">
      <div>
        <StyledTabButton
          id="all"
          clicked={allClicked}
          onClick={() => {
            setCategory("All");
            console.log(allClicked);
            isAllClicked(!allClicked);
            isVegClicked(false);
            isFlowerClicked(false);
            isHerbClicked(false);
            setSearchTerm(null);
          }}
        >
          All
        </StyledTabButton>
      </div>
      <div>
        <StyledTabButton
          id="veg"
          clicked={vegClicked}
          onClick={() => {
            setCategory("Vegetables");
            console.log(vegClicked);
            isAllClicked(false);
            isVegClicked(!vegClicked);
            isFlowerClicked(false);
            isHerbClicked(false);
            setSearchTerm(null);
          }}
        >
          Veg
        </StyledTabButton>
      </div>
      <div>
        <StyledTabButton
          id="flower"
          clicked={flowerClicked}
          onClick={() => {
            setCategory("Flowers");
            console.log(flowerClicked);
            isAllClicked(false);
            isVegClicked(false);
            isFlowerClicked(!flowerClicked);
            isHerbClicked(false);
            setSearchTerm(null);
          }}
        >
          Flowers
        </StyledTabButton>
      </div>
      <div>
        <StyledTabButton
          id="herbs"
          clicked={herbClicked}
          onClick={() => {
            setCategory("Herbs");
            console.log(herbClicked);
            isAllClicked(false);
            isVegClicked(false);
            isFlowerClicked(false);
            isHerbClicked(!herbClicked);
            setSearchTerm(null);
          }}
        >
          Herbs
        </StyledTabButton>
      </div>
    </StyledTab>
  );
}
