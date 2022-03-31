import styled from "styled-components";
import React from "react";

const StyledFilterForm = styled.form`
  display: flex;
  background-color: var(--light-color);
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  opacity: ${({ open }) => (open ? "1" : "0")};
  transition: visibility 0s, opacity 0.5s linear;
  transform: ${({ open }) => (!open ? "translateX(100%)" : "translateX(0)")};
  position: ${({ open }) => (open ? "relative" : "absolute")};
  border: none;
`;

export default StyledFilterForm;
