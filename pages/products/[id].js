import React from "react";
import Link from "next/link";
import { products } from "../../database/products";
import { getAllProductVarieties } from "../../database/model";

// export async function getStaticPaths() {
//   const allVarieties = await getAllProductVarieties(products);
//   console.log(allVarieties);

//   const varietiesArray = allVarieties.map((item) => {
//     // console.log("ID", id);
//     return { params: { variety: item.variety.toString() } };
//   });
//   // console.log("IDs array", idsArray);
//   return { paths: varietiesArray, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   const productData = await getProductData(params.variety);
//   return {
//     props: {
//       productData,
//     },
//   };
// }
