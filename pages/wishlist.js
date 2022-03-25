import Link from "next/link";
// import Image from "next/image";
import StyledWishListItem from "../components/styled-components/StyledWishListItem";
import StyledLink from "../components/styled-components/StyledLink";
import StyledProductCard from "../components/styled-components/StyledProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function Wishlist() {
  return (
    <div className="wishlist">
      <h1>Wishlist</h1>
      <div className="emptyBox">Your wishlist is empty</div>
      <StyledWishListItem>
        <StyledProductCard></StyledProductCard>
        <FontAwesomeIcon icon={faTrashCan} className="icon"></FontAwesomeIcon>
      </StyledWishListItem>

      {/* <StyledLink>
        <Link href={"/compare"}>
        <a>Compare Seeds</a>
        </Link>
      </StyledLink> */}
      <StyledLink>
        <Link href={"/all-seeds"}>
          <a>Back to Search</a>
        </Link>
      </StyledLink>
    </div>
  );
}
