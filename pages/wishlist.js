import StyledLink from "../components/styled-components/StyledLink";
import { useEffect } from "react";
import {
  useWishListContext,
  WishListContext,
} from "../components/context/WishListContext";
import { generateTags } from "../database/database-functions";
import ProductCard from "../components/ProductCard";
import { getFromLocalStorage } from "../helper-functions";

export default function Wishlist() {
  const [wishList, setWishList] = useWishListContext(WishListContext);

  useEffect(() => {
    setWishList(getFromLocalStorage("wishlist"));
  }, [setWishList]);

  return (
    <div className="wishlist">
      <h1>Your Wishlist</h1>
      <ul>
        {wishList.length === 0 ? (
          <p>Your wishlist is currently empty</p>
        ) : (
          wishList &&
          wishList.map((product) => (
            <li key={product.variety}>
              <ProductCard
                product={product}
                wishList={wishList}
                setWishList={setWishList}
                category={product.category}
                subCategory={product.subCategory}
                variety={product.variety}
                img={product.imgs[0]}
                price={product.providers[0].price}
                typeTags={generateTags(product.type)}
                climateTags={generateTags(product.climate)}
                waterTags={generateTags(product.water)}
                soilTags={generateTags(product.soil)}
              ></ProductCard>
            </li>
          ))
        )}
      </ul>

      <StyledLink href={"/all-seeds"}>Back to Search Results</StyledLink>
    </div>
  );
}
