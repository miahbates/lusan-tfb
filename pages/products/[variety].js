import products from "../../database/products";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { generateTags } from "../../database/database-functions";

const ProductPages = () => {
  const router = useRouter();
  // const { variety } = router.query;

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

  useEffect(() => {
    console.log("roma", object);
  }, [object]);

  return (
    <div>
      <h2>{capitalisedVariety}</h2>
      <p>{object && object.category}</p>
      <p>{object && object.subCategory}</p>
      <p>{object && object.description}</p>
      <div className="tag-container">
        {object &&
          generateTags(object.type).map((tag) => {
            return (
              <span className="type-tag" key={tag}>
                {tag}
              </span>
            );
          })}
      </div>
      <img src={object && object.imgs[0]}></img>
      <img src={object && object.imgs[1]}></img>
      <img src={object && object.imgs[2]}></img>
    </div>
  );
};

function findContent(capitalisedVariety) {
  // find variety
  const foundObject = products.find((productObject) => {
    return productObject.variety === capitalisedVariety;
  });
  return foundObject;
  // find index of this variety
}

export default ProductPages;
