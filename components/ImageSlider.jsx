import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import { imgs } from "../../database/products";

export default function ImageSlider({ image1, image2, image3 }) {
  return (
    <Carousel
      image1={image1}
      image2={image2}
      image3={image3}
      showThumbs={false}
      className="slider"
    >
      <div>
        <img src={image1} alt="seeds" />
      </div>
      <div>
        <img src={image2} alt="seeds" />
      </div>
      <div>
        <img src={image3} alt="seeds" />
      </div>
    </Carousel>
  );
}
