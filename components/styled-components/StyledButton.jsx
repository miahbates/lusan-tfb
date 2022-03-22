import styled from "styled-components";

const StyledButton = styled.button`
  background-color: var(--light-color);
  border: 1px solid var(--dark-color);
  color: var(--dark-color);
  text-align: center;
  transition: all 400ms;

  :hover {
    background-color: var(--dark-color);
    color: var(--light-color);
  }
`;

export default StyledButton;
