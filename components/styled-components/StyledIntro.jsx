import styled from "styled-components";

const StyledIntro = styled.div`
  h1 {
    color: white;
    font-family: "Lora";
    font-size: 1.2rem;
    text-align: center;
  }
  p {
    color: white;
    font-family: "Lora";
    font-size: 1rem;
  }
  @media only screen and (min-width: 678px) {
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 2rem;
    }
  }
`;

export default StyledIntro;
