import Link from "next/link";
import StyledLink from "../components/styled-components/StyledLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import {
  useWishListContext,
  WishListContext,
} from "../components/context/WishListContext";
import { generateTags } from "../database/database-functions";
// import dynamic from "next/dynamic";
import ProductCard from "../components/ProductCard";

export default function Wishlist() {
  const [wishList, setWishList] = useWishListContext(WishListContext);

  useEffect(() => {
    setWishList(() => {
      const saved = JSON.parse(localStorage.getItem("wishlist"));
      return saved || [];
    });
  }, [setWishList]);

  // let storedWishlist;

  // if (typeof window !== undefined) {
  //   storedWishlist = JSON.parse(localStorage.getItem("wishlist"));
  // }

  useEffect(() => console.log("wishlist in wishlist page", wishList));

  // const DynamicProductCard = dynamic(
  //   () => import("../components/ProductCard"),
  //   {
  //     ssr: false,
  //   }
  // );

  return (
    <div className="wishlist">
      <h1>Your Wishlist</h1>
      <ul>
        {wishList &&
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
          ))}
      </ul>
      <FontAwesomeIcon icon={faTrashCan} className="icon"></FontAwesomeIcon>

      <StyledLink href={"/all-seeds"}>Back to Search Results</StyledLink>
    </div>
  );
}
