import StyledToggleButton from "./styled-components/StyledToggleButton";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { useEffect } from "react";
import {
  removeFromLocalStorage,
  saveToLocalStorage,
} from "../helper-functions";
library.add(fas, far);

export default function WishlistToggle({
  product,
  wishList,
  setWishList,
  variety,
}) {
  const [heartToggle, setHeartToggle] = useState(false);

  // check if product is already in wishList and set state accordingly
  useEffect(() => {
    const isInWishlist = Boolean(
      wishList.filter((product) => product.variety === variety).length
    );
    setHeartToggle(isInWishlist);
  }, [wishList, variety]);

  return (
    <StyledToggleButton
      onClick={() => {
        // toggle heart icon
        setHeartToggle(!heartToggle);

        // remove from wishlist if already added
        if (heartToggle) {
          const filteredLocalStorage = removeFromLocalStorage(
            "wishlist",
            variety
          );
          // update state
          setWishList(filteredLocalStorage);
        } else {
          saveToLocalStorage("wishlist", product);
          // update state
          setWishList((oldState) => [...oldState, product]);
        }
      }}
    >
      <FontAwesomeIcon
        icon={heartToggle ? ["fas", "heart"] : ["far", "heart"]}
        className="icon-wishlist"
      />
    </StyledToggleButton>
  );
}
