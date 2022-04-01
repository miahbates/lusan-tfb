import styled from "styled-components";

const StyledProductPage = styled.div`
  div:nth-child(2),
  p,
  .tag-container {
    margin: 0.5rem 1rem;
  }

  a {
    margin: 2rem 1rem;
  }

  h2 {
    font-family: var(--sora-font);
    font-size: 1.3rem;
  }

  p {
    font-family: var(--poppins-font);
    font-size: 0.8rem;
  }

  div:nth-child(4) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (min-width: 677px) {
    max-width: 60%;
    width: 100%;
    margin: 0 auto;

    div:nth-child(2),
    p,
    .tag-container {
      margin: 1rem 0;
      font-size: 1rem;
    }

    a {
      margin: 3rem 0;
      padding: 1rem;
    }
  }
`;

export default StyledProductPage;
