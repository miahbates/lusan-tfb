// import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSeedling,
  faEarthEurope,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {
  return (
    <div className="about">
      <h1>About Us</h1>
      {/* <Image
        src="https://unsplash.com/photos/x8ZStukS2PM"
        alt="seeds"
        width={200}
        height={200}
      /> */}
      <div className="text-box">
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad
          minim veniam, quis nostrud htyehfki miahsb Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. incididunt ut.
        </p>
      </div>
      <h2>Our Values</h2>
      <div className="logos">
        <FontAwesomeIcon icon={faSeedling} className="icon"></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faEarthEurope}
          className="icon"
        ></FontAwesomeIcon>
        <FontAwesomeIcon icon={faHandshake} className="icon"></FontAwesomeIcon>
      </div>
      <Link href={"/"}>
        <a>⏎ Back to home</a>
      </Link>
    </div>
  );
}
