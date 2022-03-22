import StyledLink from "./styled-components/StyledLink";

// change to return a styled product card
export default function ProductCard({ subCategory, variety, img }) {
  return (
    <div>
      <h2>{variety}</h2>
      <StyledLink>More info</StyledLink>
      {/*eslint-disable-next-line @next/next/no-img-element*/}
      <img alt={subCategory} src={img} height={200} width={200} />
    </div>
  );
}
