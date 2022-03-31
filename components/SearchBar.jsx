import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import StyledSearchBar from "./styled-components/StyledSearchBar";
import { SearchContext, useSearchContext } from "./context/SearchbarContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

//previous searchbar
export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useSearchContext(SearchContext);
  const router = useRouter();

  return (
    <StyledSearchBar>
      <form
        className="search-border"
        onSubmit={(e) => {
          e.preventDefault();
          router.push(`/search/${searchTerm}`);
        }}
      >
        <input
          type="text"
          placeholder={searchTerm === null ? "Enter a crop name" : searchTerm}
          onChange={(event) =>
            setSearchTerm(
              event.target.value.replace(/^\w/, (c) => c.toUpperCase())
            )
          }
        />
        <button type="submit">
          <Link href={`/search/${searchTerm}`}>
            <a>
              <FontAwesomeIcon className="icon-searchbar" icon={faSearch} />
            </a>
          </Link>
        </button>
      </form>
    </StyledSearchBar>
  );
}
