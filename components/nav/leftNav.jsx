import Link from "next/link";
import React from "react";
import StyledNavLink from "../styled-components/StyledNavLink";

export default function LeftNav({ open }) {
  return (
    <StyledNavLink open={open} className="flex-row">
      <Link href="/" passHref>
        <li>
          <a>Home</a>
        </li>
      </Link>
      <Link href="/about-us" passHref>
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
