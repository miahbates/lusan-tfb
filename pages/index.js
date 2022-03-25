import styles from "../styles/Home.module.css";
import IntroLusan from "../components/IntroLusan";
import GridGallery from "../components/GridGallery";
import StyledButton from "../components/styled-components/StyledButton";
import StyledLink from "../components/styled-components/StyledLink";
import Link from "next/link";

export default function Home() {
  return (
    <div className="landing-page">
      <IntroLusan></IntroLusan>
      <div className="landing-row landing-gap stack">
        <StyledLink href="/all-seeds">
          <a>Click here for all seeds</a>
        </StyledLink>
      </div>
      <GridGallery></GridGallery>
    </div>
  );
}
