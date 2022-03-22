import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  return (
    <div className="box">
      <input type="text" Enter a crop name />
      <FontAwesomeIcon className="icon" icon={faSearch} />
    </div>
  );
}
