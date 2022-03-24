import Link from "next/link";
import React from "react";
import Image from "next/image";
import StyledGridTile from "./styled-components/StyledGridTile";

export default function GridGallery() {
  return (
    <div className="container">
      <StyledGridTile className="box-one background-sweetpea">
        <a>Sweet Peas</a>
      </StyledGridTile>
      <StyledGridTile className="box-two background-beetroot">
        <a>Beetroot</a>
      </StyledGridTile>
      <StyledGridTile className="box-three background-tomatoes">
        <a>Tomatoes</a>
      </StyledGridTile>
      <StyledGridTile className="box-four background-cauliflower">
        <a>Cauliflower</a>
      </StyledGridTile>
      <StyledGridTile className="box-five background-rosemary">
        <a>Rosemary</a>
      </StyledGridTile>
      <StyledGridTile className="box-eight background-petunia">
        <a>Petunia</a>
      </StyledGridTile>
      <StyledGridTile className="box-seven background-carrot">
        <a>Carrot</a>
      </StyledGridTile>
      <StyledGridTile className="box-six background-broccoli">
        <a>Broccoli</a>
      </StyledGridTile>
      <StyledGridTile className="box-nine background-basil">
        <a>Basil</a>
      </StyledGridTile>
    </div>
  );
}
