import styled from "styled-components";

const StyledProductPage = styled.div`
  img:first-child {
    display: none;
  }

  img:nth-child(3) {
    display: none;
  }

  div:nth-child(2) {
    margin: 1rem;
  }

  h2 {
    font-family: "Lora";
    font-size: 1.3rem;
  }

  p {
    font-family: "Poppins";
    font-size: 0.8rem;
  }

  div:nth-child(4) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  a {
    margin: 0.5rem;
  }
`;

export default StyledProductPage;
