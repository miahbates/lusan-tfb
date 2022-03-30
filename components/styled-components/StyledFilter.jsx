import styled from "styled-components";
import React from "react";

const StyledFilterForm = styled.form`
  background-color: var(--light-color);
  display: ${({ open }) => (open ? "flex" : "none")};
`;

export default StyledFilterForm;
