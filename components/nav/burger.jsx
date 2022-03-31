/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import React from "react";
import LeftNav from "./leftNav.jsx";
import Link from "next/link";
import StyledBurger from "../styled-components/StyledBurger";
import { useRouter } from "next/router";

export default function Burger() {
  const [open, setOpen] = React.useState(false);

  const router = useRouter();
  const path = router.pathname;

  return (
    <>
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
      <Link href="/" passHref>
        <a>
          <img className="lusan-logo" src="/logo.png" alt="logo" />
        </a>
      </Link>
      <LeftNav open={open}></LeftNav>
    </>
  );
}
