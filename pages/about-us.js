import Image from "next/image";
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
      <div className="seeds-box">
        <Image
          className="seeds"
          src="/seeds.jpg"
          alt="seeds"
          width={200}
          height={200}
        />
      </div>
      <div className="text-box">
        <p className="text">
          Lusan translates to plants from Scottish Gaelic to English
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
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
