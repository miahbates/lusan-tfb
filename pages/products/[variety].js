import products from "../../database/products";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { generateTags } from "../../database/database-functions";
import StyledProductPage from "../../components/styled-components/StyledProductPage";
import Link from "next/link";
import StyledLink from "../../components/styled-components/StyledLink";

const ProductPages = () => {
  const router = useRouter();

  const [variety, setVariety] = useState(null);
  const [object, setObject] = useState(null);

  useEffect(() => {
    if (router.isReady) {
      setVariety(router.query.variety);
    }
  }, [router]);

  console.log(variety, "variety");

  const capitalisedVariety =
    variety && variety.replace(/^\w/, (c) => c.toUpperCase());

  useEffect(() => {
    setObject(findContent(capitalisedVariety));
  }, [variety, capitalisedVariety]);

  // useEffect(() => {
  //   console.log("roma", object);
  // }, [object]);

  return (
    <StyledProductPage>
      <div className="flex-row">
        <img src={object && object.imgs[0]}></img>
        <img src={object && object.imgs[1]}></img>
        <img src={object && object.imgs[2]}></img>
      </div>
      <div>
        <h2>
          {capitalisedVariety} {object && object.subCategory}
        </h2>

        <p>From €{object && object.providers[0].price}</p>

        <div className="tag-container">
          {object &&
            generateTags(object.type).map((tag) => {
              return (
                <span className="type-tag" key={tag}>
                  {tag}
                </span>
              );
            })}
          <p>{object && object.description}</p>
        </div>

        <div>
          <Link href="/all-seeds" passHref>
            <StyledLink>Back to search</StyledLink>
          </Link>

          <Link href="/wishlist" passHref>
            <StyledLink>Add to wishlist</StyledLink>
          </Link>
        </div>
      </div>
    </StyledProductPage>
  );
};

function findContent(capitalisedVariety) {
  // find variety
  const foundObject = products.find((productObject) => {
    return productObject.variety === capitalisedVariety;
  });
  return foundObject;
}

export default ProductPages;
