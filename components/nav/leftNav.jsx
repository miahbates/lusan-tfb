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
  console.log("open", open);
  return (
    <StyledNavLink open={open} className="flex-row">
      <Link href="/about-us" passHref>
        <li>
          <a>About Us</a>
        </li>
      </Link>
      <li>All Seeds</li>
      <li>Flowers</li>
      <li>Herbs</li>
      <li>Vegetables</li>
      <Link href="/contact-us" passHref>
        <li>Contact Us</li>
      </Link>
    </StyledNavLink>
  );
}
