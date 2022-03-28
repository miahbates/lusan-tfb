import Link from "next/link";
// import Image from "next/image";
import StyledWishListItem from "../components/styled-components/StyledWishListItem";
import StyledLink from "../components/styled-components/StyledLink";
import StyledProductCard from "../components/styled-components/StyledProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import {
  useWishListContext,
  WishListContext,
} from "../components/context/WishListContext";

export default function Wishlist() {
  const [wishList, setWishList] = useWishListContext(WishListContext);

  useEffect(() => {
    setWishList(() => {
      const saved = JSON.parse(localStorage.getItem("wishlist"));
      return saved || [];
    });
  }, [setWishList]);

  useEffect(() => console.log("wishlist in wishlist page", wishList));
  return (
    <div className="wishlist">
      <h1>Wishlist</h1>
      <div className="emptyBox">Your wishlist is empty</div>
      {/* <StyledWishListItem>
        <StyledProductCard></StyledProductCard>
        <FontAwesomeIcon icon={faTrashCan} className="icon"></FontAwesomeIcon>
      </StyledWishListItem> */}

      {/* <StyledLink>
        <Link href={"/compare"}>
        <a>Compare Seeds</a>
        </Link>
      </StyledLink> */}
      <StyledLink>
        <Link href={"/all-seeds"}>Back to Search</Link>
      </StyledLink>
    </div>
  );
}
