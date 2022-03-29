import styled from "styled-components";

const StyledNavLink = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  list-style: none;
  border-radius: 2px;
  color: var(--dark-color);

  li {
    justify-content: flex-start;
    transition: transform 0.3s ease0-in-out;
    font-family: var(--sora-font);
    font-size: 1.1rem;
  }
  li:hover {
    color: var(--dark-secondary-color);
    transform: scale(1.025);
    transition: all 400ms;
    cursor: pointer;
    border-bottom: 2px solid var(--dark-secondary-color);
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: var(--light-color);
    color: black;
    position: fixed;
    top: -1rem;
    left: 0;
    height: 70vh;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(1000%)")};
    transition: transform 0.3s ease0-in-out;
    box-shadow: var(--dark-secondary-color) 0px 8px 24px;
  }

  li {
    padding: 0.5rem 1rem;
    margin: 0 2rem 0 0.5rem;
  }
`;

export default StyledNavLink;
