import styled from "styled-components";

const StyledTab = styled.div`
  background-color: var(--light-color);
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  button {
    background-color: var(--light-color);
    color: var(--dark-color);
    text-align: center;
    transition: all 400ms;
    border: none;
  }
`;

export default StyledTab;
