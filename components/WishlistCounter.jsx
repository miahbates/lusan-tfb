import { useWishListContext, WishListContext } from "./context/WishListContext";
import { getFromLocalStorage } from "../helper-functions";
import { useEffect } from "react";
import styled from "styled-components";

const StyledWishlistCounter = styled.span`
  position: absolute;
  left: -8px;
  bottom: -3px;
  background-color: var(--second-mid-color);
  border-radius: 15px;
  padding: 1px 5px;
`;

export default function WishlistCounter() {
  const [wishList, setWishList] = useWishListContext(WishListContext);

  useEffect(() => {
    setWishList(getFromLocalStorage("wishlist"));
  }, [setWishList]);

  return (
    <>
      {wishList.length > 0 ? (
        <StyledWishlistCounter>{wishList.length}</StyledWishlistCounter>
      ) : null}
    </>
  );
}
