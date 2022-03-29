import StyledToggleButton from "./styled-components/StyledToggleButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function Bin({ variety, setWishList }) {
  return (
    <StyledToggleButton
      onClick={() => {
        const filteredLocalStorage = JSON.parse(
          localStorage.getItem("wishlist")
        ).filter((product) => product.variety !== variety);
        localStorage.setItem("wishlist", JSON.stringify(filteredLocalStorage));
        // update state
        setWishList(filteredLocalStorage);
      }}
    >
      <FontAwesomeIcon icon={faTrashCan} className="icon"></FontAwesomeIcon>
    </StyledToggleButton>
  );
}
