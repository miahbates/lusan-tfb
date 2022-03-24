import Link from "next/link";
import React from "react";
import StyledTab from "./styled-components/StyledTab";

export default function CategoryFilters({ setCategory }) {
  return (
    <StyledTab className="box">
      <button id="all" onClick={() => setCategory("All")}>
        All
      </button>
      <button id="veg" onClick={() => setCategory("Vegetables")}>
        Veg
      </button>
      <button id="flower" onClick={() => setCategory("Flowers")}>
        Flowers
      </button>
      <button id="herbs" onClick={() => setCategory("Herbs")}>
        Herbs
      </button>
    </StyledTab>
  );
}
