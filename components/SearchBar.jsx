import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import StyledSearchBar from "./styled-components/StyledSearchBar";

export default function SearchBar({ setSearchTerm }) {
  return (
    <StyledSearchBar>
      <input
        type="text"
        placeholder="Enter a crop name"
        onChange={(event) =>
          setSearchTerm(
            event.target.value.replace(/^\w/, (c) => c.toUpperCase())
          )
        }
      />
      <FontAwesomeIcon className="icon-search" icon={faSearch} />
 </StyledSearchBar>
  );
}
