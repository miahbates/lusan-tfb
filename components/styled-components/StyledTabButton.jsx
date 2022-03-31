import styled from "styled-components";

const StyledTabButton = styled.button`
  background-color: ${({ clicked }) =>
    clicked ? "var(--dark-color)" : "var(--light-color)"};
  color: ${({ clicked }) =>
    clicked ? "var(--light-color)" : "var(--dark-color)"};
  text-align: center;
  transition: all 400ms;
  border: none;
  font-family: var(--sora-font);
  font-size: 1.1rem;
  transition: all 400ms;
  flex-grow: 1;

  :hover {
    cursor: pointer;
    background-color: var(--dark-color);
    color: var(--light-color);
  }
`;

export default StyledTabButton;
