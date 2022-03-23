import styled from "styled-components";
import React from "react";

const StyledBurger = styled.div`
  display: flex;
  width: 4rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  left: 15px;
  justify-content: space-around;
  flex-flow: column nowrap;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "red" : "var(--dark-color)")};
    transform-origin: 1px;
    transition: all 0.2s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? 0 : 1)};
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export default function Burger() {
  const [open, setOpen] = React.useState(false);
  return (
    <StyledBurger
      open={open}
      onClick={() => {
        setOpen(!open);
      }}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}
