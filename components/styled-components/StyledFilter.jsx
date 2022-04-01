import styled from "styled-components";

const StyledFilterForm = styled.form`
  display: flex;
  background-color: var(--light-color);
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  opacity: ${({ open }) => (open ? "1" : "0")};
  transition: visibility 0s, opacity 0.5s linear;
  transform: ${({ open }) => (!open ? "translateX(100%)" : "translateX(0)")};
  position: ${({ open }) => (open ? "relative" : "absolute")};
  border: none;
  flex-direction: row;
  flex-grow: 1;
  width: 100%;
  flex-wrap: wrap;


  input[type="checkbox"] {
    margin: 0;
    padding-left: 10rem;
  }

  label {
    padding-right: 3rem;
    padding-left: 0.25rem;
    color: var(--dark-color);
  }

  div {
    width: 100%;
  }
  
  @media (max-width: 400px) {
    div {
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }
    span {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    }
  }
`;

export default StyledFilterForm;
