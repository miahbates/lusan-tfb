// import React, { useState } from "react";
// import { SliderData } from "./SliderData";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faArrowCircleRight,
//   faArrowCircleLeft,
// } from "@fortawesome/free-solid-svg-icons";
// import Image from "next/image";

// export default function ImageSlider(slides) {
//   const [current, setCurrent] = useState(0);
//   const length = slides.length;

//   const nextSlide = () => {
//     setCurrent(current === length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? length - 1 : current - 1);
//   };

//   // console.log(current);

//   if (!Array.isArray(slides) || slides.length <= 0) {
//     return null;
//   }
//   return (
//     <section className="slider">
//       <FontAwesomeIcon
//         icon={faArrowCircleLeft}
//         className="left-arrow"
//         onClick={prevSlide}
//       ></FontAwesomeIcon>
//       <FontAwesomeIcon
//         icon={faArrowCircleRight}
//         className="right-arrow"
//         onClick={nextSlide}
//       ></FontAwesomeIcon>
//       {SliderData.map((slide, index) => {
//         return (
//           <div
//             className={index === current ? "slide active" : "slide"}
//             key={index}
//           >
//             {index === current && (
//               <Image
//                 src={slide.image}
//                 alt="seeds"
//                 className="image"
//                 width={200}
//                 height={200}
//               />
//             )}
//           </div>
//         );
//       })}
//     </section>
//   );
// }
