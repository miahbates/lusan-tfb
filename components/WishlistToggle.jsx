import StyledToggleButton from "./styled-components/StyledToggleButton";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, far);

export default function WishlistToggle({ product, setWishList, variety }) {
  const [heartToggle, setHeartToggle] = useState(false);

  return (
    <StyledToggleButton
      onClick={() => {
        // toggle heart icon
        setHeartToggle(!heartToggle);

        // if the product has been added to wishlist already:
        // get the current local storage array and filter to remove the product
        // set local storage to the filtered array
        if (heartToggle) {
          const filteredLocalStorage = JSON.parse(
            localStorage.getItem("wishlist")
          ).filter((product) => product.variety !== variety);
          localStorage.setItem(
            "wishlist",
            JSON.stringify(filteredLocalStorage)
          );
          // update state
          setWishList(filteredLocalStorage);
        } else {
          // update localstorage
          const localStorageWishList =
            JSON.parse(localStorage.getItem("wishlist")) || [];
          localStorageWishList.push(product);
          localStorage.setItem(
            "wishlist",
            JSON.stringify(localStorageWishList)
          );

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
