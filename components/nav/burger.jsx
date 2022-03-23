import styled from "styled-components";
import React from "react";
import LeftNav from "./LeftNav";

const StyledBurger = styled.div`
  @media (max-width: 768px) {
    display: flex;
    width: 4rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    left: 15px;
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

export default function Burger({ open, setOpen }) {
  return (
    <div>
      <StyledBurger
        open={open}
        setOpen={setOpen}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div />
        <div />
        <div />
      </StyledBurger>
      <LeftNav open={open} setOpen={setOpen}></LeftNav>
    </div>
  );
}
