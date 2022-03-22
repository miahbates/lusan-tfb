import Link from "next/link";
import React from "react";

export default function CategoryFilters() {
  return (
    <div className="box">
      <button id="all">All</button>
      <button id="veg">Veg</button>
      <button id="flower">Flowers</button>
      <button id="herbs">Herbs</button>
    </div>
  );
}