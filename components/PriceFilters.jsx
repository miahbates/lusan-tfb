import Link from "next/link";
import React from "react";

export default function PriceFilters({ min, max, setMin, setMax }) {
  return (
    <div className="box">
      <fieldset>
        <legend>Price</legend>
        <label htmlFor="min-price">
          Min price
          <input
            type="range"
            id="min-price"
            min="0.5"
            max="10"
            step="0.25"
            value={min}
            onChange={(event) => setMin(event.target.value)}
          />
        </label>
        <label htmlFor="max-price">
          Max price
          <input
            type="range"
            id="max-price"
            min="0.5"
            max="10"
            step="0.25"
            value={max}
            onChange={(event) => setMax(event.target.value)}
          />
        </label>
      </fieldset>
    </div>
  );
}
