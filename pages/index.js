import styles from "../styles/Home.module.css";
import IntroLusan from "../components/IntroLusan";
import GridGallery from "../components/GridGallery";
import StyledButton from "../components/styled-components/StyledButton";
import StyledLink from "../components/styled-components/StyledLink";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <IntroLusan></IntroLusan>
      <Link href="/all-seeds">
        <a>Click here for all seeds</a>
      </Link>
      <Link href="/contact-us">
        <a>Click here for all seeds</a>
      </Link>
      <GridGallery></GridGallery>
      <StyledButton>Browse All</StyledButton>
      <StyledLink>Link</StyledLink>
    </div>
  );
}
