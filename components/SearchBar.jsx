import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import StyledSearchBar from "./styled-components/StyledSearchBar";
import { SearchContext, useSearchContext } from "./context/SearchbarContext";

//previous searchbar
export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useSearchContext(SearchContext);

  return (
    <StyledSearchBar>
      <div className="search-border">
        <input
          type="text"
          placeholder={searchTerm === null ? "Enter a crop name" : searchTerm}
          onChange={(event) =>
            setSearchTerm(
              event.target.value.replace(/^\w/, (c) => c.toUpperCase())
            )
          }
        />
        <FontAwesomeIcon className="icon-searchbar" icon={faSearch} />
      </div>
    </StyledSearchBar>
  );
}
