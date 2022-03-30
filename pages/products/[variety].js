/* eslint-disable @next/next/no-img-element */
import products from "../../database/products";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { generateTags } from "../../database/database-functions";
import StyledProductPage from "../../components/styled-components/StyledProductPage";
import Link from "next/link";
import StyledLink from "../../components/styled-components/StyledLink";
import {
  useWishListContext,
  WishListContext,
} from "../../components/context/WishListContext";
import WishlistToggle from "../../components/WishlistToggle";
import ImageSlider from "../../components/ImageSlider";

export default function ProductPages() {
  const router = useRouter();

  const [variety, setVariety] = useState(null);
  const [product, setProduct] = useState(null);
  const [wishList, setWishList] = useWishListContext(WishListContext);
  const capitalisedVariety =
    variety && variety.replace(/^\w/, (c) => c.toUpperCase());

  useEffect(() => {
    if (router.isReady) {
      setVariety(router.query.variety);
    }
  }, [router]);

  useEffect(() => {
    setProduct(findContent(capitalisedVariety));
  }, [variety, capitalisedVariety]);

  useEffect(() => {
    setWishList(() => {
      const saved = JSON.parse(localStorage.getItem("wishlist"));
      return saved || [];
    });
  }, [setWishList]);

  useEffect(
    () => console.log("wishlist in product page", wishList),
    [wishList]
  );

  return (
    <StyledProductPage>
      <ImageSlider
        image1={product && product.imgs[0]}
        image2={product && product.imgs[1]}
        image3={product && product.imgs[2]}
      />

      <div className="title-wishlist">
        <h2>
          {capitalisedVariety} {product && product.subCategory}
        </h2>
        <WishlistToggle
          product={product && product}
          wishList={wishList}
          setWishList={setWishList}
          variety={product && product.variety}
        />
      </div>
      <p>From €{product && product.providers[0].price}</p>
      <div className="tag-container">
        {product &&
          generateTags(product.type).map((tag) => {
            return (
              <span className="type-tag" key={tag}>
                {tag}
              </span>
            );
          })}
      </div>
      <p>{product && product.description}</p>

      <Link href="/all-seeds" passHref>
        <StyledLink>Back to search</StyledLink>
      </Link>
    </StyledProductPage>
    // </ImageSlider>
  );
}

function findContent(capitalisedVariety) {
  // find variety
  const foundObject = products.find((productObject) => {
    return productObject.variety === capitalisedVariety;
  });
  return foundObject;
}
