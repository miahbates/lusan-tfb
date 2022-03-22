import styles from "../styles/Home.module.css";
import IntroLusan from "../components/IntroLusan";
import GridGallery from "../components/GridGallery";
import StyledButton from "../components/styled-components/StyledButton";
import StyledLink from "../components/styled-components/StyledLink";

export default function Home() {
  return (
    <div>
      <IntroLusan></IntroLusan>
      <GridGallery></GridGallery>
      <StyledButton>Browse All</StyledButton>
      <StyledLink>Link</StyledLink>
    </div>
  );
}
