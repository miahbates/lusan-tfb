import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar({ setSearchTerm }) {
  return (
    <div className="box">
      <input
        type="text"
        placeholder="Enter a crop name"
        onChange={(event) =>
          setSearchTerm(
            event.target.value.replace(/^\w/, (c) => c.toUpperCase())
          )
        }
      />
      <FontAwesomeIcon className="icon" icon={faSearch} />
    </div>
  );
}
