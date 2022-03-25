import Link from "next/link";
import React from "react";
import Image from "next/image";
import SearchBar from "./SearchBar";
import StyledIntro from "./styled-components/StyledIntro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";

export default function IntroLusan() {
  return (
    <StyledIntro className="background-veg">
      <SearchBar></SearchBar>
      <h1>Selecting seeds made simple</h1>
      <div className="landing-row">
        <div className="flex-column">
          <FontAwesomeIcon className="icon-seedling" icon={faSeedling} />
          <p>Eco-friendly</p>
        </div>
        <div className="flex-column">
          <FontAwesomeIcon className="icon-seedling" icon={faSeedling} />
          <p>Biodiversity</p>
        </div>
        <div className="flex-column">
          <FontAwesomeIcon className="icon-seedling" icon={faSeedling} />
          <p>Organic</p>
        </div>
      </div>
    </StyledIntro>
  );
}
