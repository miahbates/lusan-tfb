import StyledLink from "./styled-components/StyledLink";
import StyledProductCard from "./styled-components/StyledProductCard";

// change to return a styled product card
export default function ProductCard({ subCategory, variety, img }) {
  return (
    <div>
      <StyledProductCard>
        <div className="product-img-container">
          {/*eslint-disable-next-line @next/next/no-img-element*/}
          <img alt={subCategory} src={img} />
        </div>
        <div className="info-container">
          <h2>{variety}</h2>
          <p>{subCategory}</p>
          <StyledLink>More info</StyledLink>
        </div>
      </StyledProductCard>
    </div>
  );
}
