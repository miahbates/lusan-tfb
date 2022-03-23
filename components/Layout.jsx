import Head from "next/head";
import Navbar from "./Nav/Navbar";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBars,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

export default function Layout({ children, setOpen, open }) {
  return (
    <div>
      <Head>
        <title>Lusan</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex-row">
        <Navbar open={open} setOpen={setOpen}></Navbar>
        <div className="search-wishlist-icons">
          <Link href="/allseeds">
            <a>
              <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
            </a>
          </Link>
          <Link href="/wishlist">
            <a>
              <FontAwesomeIcon icon={faHeart} className="icon" />
            </a>
          </Link>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
}
