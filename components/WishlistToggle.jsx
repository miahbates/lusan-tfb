import StyledToggleButton from "./styled-components/StyledToggleButton";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, far);

export default function WishlistToggle() {
  const [heartToggle, setHeartToggle] = useState(false);

  console.log("heart toggle", heartToggle);

  return (
    <StyledToggleButton onClick={(event) => setHeartToggle(!heartToggle)}>
      <FontAwesomeIcon
        icon={heartToggle && heartToggle ? ["fas", "heart"] : ["far", "heart"]}
        className="icon-wishlist"
      />
    </StyledToggleButton>
  );
}
