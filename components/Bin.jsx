import StyledToggleButton from "./styled-components/StyledToggleButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { removeFromLocalStorage } from "../helper-functions";

export default function Bin({ variety, setWishList }) {
  return (
    <StyledToggleButton
      onClick={() => {
        // remove from local storage
        const filteredLocalStorage = removeFromLocalStorage(
          "wishlist",
          variety
        );
        // update state
        setWishList(filteredLocalStorage);
      }}
    >
      <FontAwesomeIcon icon={faTrashCan} className="icon"></FontAwesomeIcon>
    </StyledToggleButton>
  );
}
