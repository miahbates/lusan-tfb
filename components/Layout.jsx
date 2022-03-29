import Head from "next/head";
import Navbar from "./nav/navbar.jsx";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBars,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  SearchContext,
  SearchbarProvider,
  useSearchContext,
} from "./context/SearchbarContext";
import { useEffect, useState, useContext } from "react";

export default function Layout({ children }) {
  return (
    <SearchbarProvider>
      <div className="layout">
        <Head>
          <title>Lusan</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <div className="flex-row navbar">
          <Navbar></Navbar>
          <div className="search-wishlist-icons">
            <Link href="/all-seeds">
              <a>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="icon-search"
                />
              </a>
            </Link>
            <Link href="/wishlist">
              <a>
                <FontAwesomeIcon icon={faHeart} className="icon-wishlist" />
              </a>
            </Link>
          </div>
        </div>
        <main>{children}</main>
      </div>
    </SearchbarProvider>
  );
}
