import styled from "styled-components";

const StyledNavLink = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  list-style: none;
  border-radius: 5px;
  color: var(--dark-color);

  li {
    padding: 0 1rem;
    margin: 0 2rem;
    justify-content: flex-start;
    transition: transform 0.3s ease0-in-out;
  }
  li:hover {
    color: var(--dark-secondary-color);
    transform: scale(1.05);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: var(--light-color);
    color: black;
    position: fixed;
    top: -1rem;
    left: 0;
    height: 50vh;
    width: 300px;
    padding: 3.5rem;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(1000%)")};
    transition: transform 0.3s ease0-in-out;
    box-shadow: 1px 1px 1px var(--dark-secondary-color);
  }
`;

export default StyledNavLink;
