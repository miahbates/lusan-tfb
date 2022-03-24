// import Link from "next/link";
// import Image from "next/image";
import StyledWishListItem from "../components/styled-components/StyledWishListItem";
import StyledButton from "../components/styled-components/StyledButton";
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

      <StyledButton>
        <span className="compare">Compare Seeds</span>
      </StyledButton>
      <StyledButton>
        <span className="compare">Back to Search</span>
      </StyledButton>
      {/* <Image src={img} alt="wishlist" width={200} height={200} /> */}
    </div>
  );
}
