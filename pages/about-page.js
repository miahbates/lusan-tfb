// import Head from "next/head";
// import Image from "next/image";
// import StyledButton from "../components/styled-components/StyledButton";
// import Layout from "../components/layout";
// import StyledLink from "../components/styled-components/StyledLink";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSeedling,
  faEarthEurope,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {
  return (
    <div>
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim
        veniam, quis nostrud htyehfki miahsb Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. incididunt ut.
      </p>
      <h2>Our Values</h2>
      <FontAwesomeIcon icon={faSeedling} className="icon"></FontAwesomeIcon>
      <FontAwesomeIcon icon={faEarthEurope} className="icon"></FontAwesomeIcon>
      <FontAwesomeIcon icon={faHandshake} className="icon"></FontAwesomeIcon>
      <Link href={"/"}>
        <a>⏎ Back to home</a>
      </Link>
    </div>
  );
}
