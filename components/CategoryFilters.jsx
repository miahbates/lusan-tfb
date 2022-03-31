import Link from "next/link";
import React from "react";
import StyledTab from "./styled-components/StyledTab";
import StyledTabButton from "./styled-components/StyledTabButton";

export default function CategoryFilters({ setCategory, category }) {
  const [allClicked, isAllClicked] = React.useState(false);
  const [vegClicked, isVegClicked] = React.useState(false);
  const [flowerClicked, isFlowerClicked] = React.useState(false);
  const [herbClicked, isHerbClicked] = React.useState(false);

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
          }}
        >
          Herbs
        </StyledTabButton>
      </div>
    </StyledTab>
  );
}
