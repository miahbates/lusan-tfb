import StyledLink from "./styled-components/StyledLink";
import StyledProductCard from "./styled-components/StyledProductCard";
import Link from "next/link";
import { products } from "../database/products";

// change to return a styled product card
export default function ProductCard({ subCategory, variety, img, products }) {
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
          <Link
            href={`/products/${products.variety}`}
            key={products.variety}
            passHref
          >
            <StyledLink>More info</StyledLink>
          </Link>
        </div>
      </StyledProductCard>
    </div>
  );
}
