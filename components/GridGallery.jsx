import Link from "next/link";
import React from "react";
import Image from "next/image";
import StyledGridTile from "./styled-components/StyledGridTile";
import StyledGridCover from "./styled-components/StyledGridCover";

export default function GridGallery() {
  return (
    <div className="container">
      <Link href="/all-seeds">
        <StyledGridCover className="box-one background-sweetpea">
          <StyledGridTile className="box-one inside-grid">
            <a>Sweet Peas</a>
          </StyledGridTile>
        </StyledGridCover>
      </Link>

      <Link href="/all-seeds">
        <StyledGridCover className="box-two background-beetroot">
          <StyledGridTile className="box-two inside-grid">
            <a>Beetroot</a>
          </StyledGridTile>
        </StyledGridCover>
      </Link>

      <Link href="/all-seeds">
        <StyledGridCover className="box-three background-tomatoes">
          <StyledGridTile className="box-three inside-grid">
            <a>Tomatoes</a>
          </StyledGridTile>
        </StyledGridCover>
      </Link>

      <Link href="/all-seeds">
        <StyledGridCover className="box-four background-cauliflower">
          <StyledGridTile className="box-four inside-grid">
            <a>Cauliflower</a>
          </StyledGridTile>
        </StyledGridCover>
      </Link>

      <Link href="/all-seeds">
        <StyledGridCover className="box-five background-rosemary">
          <StyledGridTile className="box-five inside-grid">
            <a>Rosemary</a>
          </StyledGridTile>
        </StyledGridCover>
      </Link>

      <Link href="/all-seeds">
        <StyledGridCover className="box-eight background-petunia">
          <StyledGridTile className="box-eight inside-grid">
            <a>Petunia</a>
          </StyledGridTile>
        </StyledGridCover>
      </Link>

      <Link href="/all-seeds">
        <StyledGridCover className="box-seven background-carrot">
          <StyledGridTile className="box-seven inside-grid">
            <a>Carrot</a>
          </StyledGridTile>
        </StyledGridCover>
      </Link>

      <Link href="/all-seeds">
        <StyledGridCover className="box-six background-broccoli">
          <StyledGridTile className="box-six inside-grid">
            <a>Broccoli</a>
          </StyledGridTile>
        </StyledGridCover>
      </Link>

      <Link href="/all-seeds">
        <StyledGridCover className="box-nine background-basil">
          <StyledGridTile className="box-nine inside-grid">
            <a>Basil</a>
          </StyledGridTile>
        </StyledGridCover>
      </Link>
    </div>
  );
}
