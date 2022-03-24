import styled from "styled-components";

const StyledSearchBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  input[type="text"] {
    font-family: "Poppins";
    font-size: 0.8rem;
    margin: 1rem 0;
    padding: 0.25rem 1rem;
    border-radius: 10px;
    background-color: var(--light-color);
    color: var(--dark-secondary-color);
    border: 4px solid var(--dark-color);
    max-width: 100%;
  }

  @media only screen and (min-width: 678px) {
    input[type="text"] {
      font-size: 1.2rem;
      margin: 1.5rem 0;
      padding: 0.25;
    }
  }
`;

export default StyledSearchBar;
