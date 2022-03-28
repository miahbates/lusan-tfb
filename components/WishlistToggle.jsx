import StyledToggleButton from "./styled-components/StyledToggleButton";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, far);

export default function WishlistToggle(product, wishList, setWishList) {
  const [heartToggle, setHeartToggle] = useState(false);

  console.log("heart toggle", heartToggle);

  return (
    <StyledToggleButton
      onClick={() => {
        // toggle heart icon
        setHeartToggle(!heartToggle);

        // update localstorage and state
        const localStorageWishList =
          JSON.parse(localStorage.getItem("wishlist")) || [];
        localStorageWishList.push(product);
        console.log("local storage", localStorageWishList);
        localStorage.setItem("wishlist", JSON.stringify(localStorageWishList));
        const newWishList = [...wishList];
        newWishList.push(product);
        setWishList(newWishList);
      }}
    >
      <FontAwesomeIcon
        icon={heartToggle && heartToggle ? ["fas", "heart"] : ["far", "heart"]}
        className="icon-wishlist"
      />
    </StyledToggleButton>
  );
}
