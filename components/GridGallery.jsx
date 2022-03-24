import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function GridGallery() {
  return (
    <div className="container">
      <div className="box-one background-pears">
        <p>Brocolli</p>
      </div>
      <div className="box-two background-beetroot">
        <p>Beetroot</p>
      </div>
      <div className="box-three background-tomatoes">
        <p>Cauliflower</p>
      </div>
      <div className="box-four background-tomatoes">
        <p>Tomatoes</p>
      </div>
      <div className="box-five background-rosemary">
        <p>Rosemary</p>
      </div>
      <div className="box-six background-basil">
        <p>Basil</p>
      </div>
      <div className="box-seven background-apples">
        <p>Apples</p>
      </div>
      <div className="box-eight background-broccoli">
        <p>Broccoli</p>
      </div>
      <div className="box-nine background-carrot">
        <p>Carrot</p>
      </div>
    </div>
  );
}
