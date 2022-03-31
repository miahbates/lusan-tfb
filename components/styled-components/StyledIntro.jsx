import styled from "styled-components";

const StyledIntro = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;

  h1 {
    color: white;
    font-size: 1.2rem;
    text-align: center;
    font-family: var(--sora-font);
  }
  p {
    color: white;
    font-family: var(--poppins-font);
    font-size: 1rem;
  }
  @media only screen and (min-width: 678px) {
    h1 {
      font-size: 1.8rem;
      margin-top: 2rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
`;

export default StyledIntro;
