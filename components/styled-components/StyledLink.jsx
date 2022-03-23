import styled from "styled-components";

const StyledLink = styled.a`
  background: var(--light-color);
  border: 1px solid var(--dark-color);
  color: var(--dark-color);
  padding: 5px 12px;
  cursor: pointer;
  text-align: center;
  transition: all 400ms;
  :hover {
    background: var(--dark-color);
    color: var(--light-color);
  }
`;

export default StyledLink;
