import StyledLink from "./styled-components/StyledLink";
import StyledProductCard from "./styled-components/StyledProductCard";
import Link from "next/link";
import WishlistToggle from "./WishlistToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, far);

// pass in an array of tags to render
export default function ProductCard({
  subCategory,
  variety,
  img,
  price,
  typeTags,
  climateTags,
  waterTags,
  soilTags,
}) {
  // set state to toggle heart icon

  return (
    <div>
      <StyledProductCard>
        <img alt={subCategory} src={img} />
        <div className="info-container">
          <div className="title-wishlist">
            <h2>
              {variety} {subCategory}
            </h2>
            <WishlistToggle></WishlistToggle>
          </div>
          <p>From £{price}</p>
          <div className="tag-container">
            {typeTags &&
              typeTags.map((tag) => (
                <span key={tag} className="type-tag">
                  {tag.replace(/^\w/, (c) => c.toUpperCase())}
                </span>
              ))}
            {climateTags &&
              climateTags.map((tag) => (
                <span key={tag} className="climate-tag">
                  {tag.replace(/^\w/, (c) => c.toUpperCase())}
                </span>
              ))}
            {waterTags &&
              waterTags.map((tag) => (
                <span key={tag} className="water-tag">
                  {tag.replace(/^\w/, (c) => c.toUpperCase())}
                </span>
              ))}
            {soilTags &&
              soilTags.map((tag) => (
                <span key={tag} className="soil-tag">
                  {tag.replace(/^\w/, (c) => c.toUpperCase())}
                </span>
              ))}
          </div>

          <Link href={`/products/${variety}`} key={variety} passHref>
            <StyledLink>More info</StyledLink>
          </Link>
        </div>
      </StyledProductCard>
    </div>
  );
}
