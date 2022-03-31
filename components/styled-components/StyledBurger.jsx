import styled from "styled-components";

const StyledBurger = styled.div`
  background-color: var(--light-color);
  max-width: 2.5rem;
  align-items: center;
  box-shadow: 1px -1px 1px var(--light-color);

  :hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: flex;
    width: 4rem;
    height: 2rem;
    position: fixed;
    top: 1rem;
    left: 0.5rem;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 999;

    div {
      width: 2rem;
      height: 0.25rem;
      background-color: var(--dark-color);
      transform-origin: 1px;
      transition: all 0.2s linear;

      &:nth-child(1) {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }
      &:nth-child(2) {
        opacity: ${({ open }) => (open ? 0 : 1)};
        transform: ${({ open }) =>
          open ? "translateX(100%)" : "translateX(0)"};
      }
      &:nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`;

export default StyledBurger;
