import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBars,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import LeftNav from "./leftNav";
import Burger from "./burger";

const Ul = styled.ul`
  li {
    padding: 0 1rem;
    margin: 0 2rem;
    list-style: none;
  }
`;

export default function Navbar() {
  return (
    <div className="flex-row">
      <Burger></Burger>
      <LeftNav></LeftNav>
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
  );
}

{
  /* <Link href="/">
<a>Lusan</a>
</Link> */
}
