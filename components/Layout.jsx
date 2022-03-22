import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBars,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Lusan</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <div>
          <Link href="/menu">
            <a>
              <FontAwesomeIcon icon={faBars} className="icon" />
            </a>
          </Link>
          <Link href="/">
            <a>Lusan</a>
          </Link>
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
      </header>

      <main>{children}</main>
    </div>
  );
}
