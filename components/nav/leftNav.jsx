import styled from "styled-components";
import Link from "next/link";
import React from "react";

const StyledNavLink = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  list-style: none;
  li {
    padding: 0 1rem;
    margin: 0 2rem;
    justify-content: flex-start;
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
  }
`;

export default function LeftNav({ open }) {
  return (
    <StyledNavLink open={open} className="flex-row">
      <Link href="/" passHref>
        <li>
          <a>Home</a>
        </li>
      </Link>
      <Link href="/about-page" passHref>
        <li>
          <a>About Us</a>
        </li>
      </Link>
      <Link href="/all-seeds" passHref>
        <li>
          <a>All Seeds</a>
        </li>
      </Link>
      <Link href="/all-seeds" passHref>
        <li>
          <a>Flowers</a>
        </li>
      </Link>
      <Link href="/all-seeds" passHref>
        <li>
          <a>Herbs</a>
        </li>
      </Link>
      <Link href="/all-seeds" passHref>
        <li>
          <a>Vegetables</a>
        </li>
      </Link>
      <li>Contact Us</li>
    </StyledNavLink>
  );
}
