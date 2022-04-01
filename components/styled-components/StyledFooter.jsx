import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: var(--dark-color);
  margin-top: 1.5rem;
  bottom: 0;
  width: 100vw;
  height: auto;
  padding-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  &:hover {
    color: var(--mid-color);
    transition: 200ms ease-in;
  }

  @media only screen and (min-width: 678px) {
    .footer {
      justify-content: space-evenly;
      &:hover {
        color: var(--mid-color);
        transition: 200ms ease-in;
      }
    }
  }

  .footer-links {
    font-weight: semi-bold;
    color: white;
    text-decoration: none;
    text-align: center;
    font-size: 1rem;
    padding: 1rem;
    font-family: var(--poppins-font);

    &:hover {
      color: var(--mid-color);
      transition: 200ms ease-in;
    }
  }

  span {
    font-family: var(--sora-font);
    font-size: 0.7rem;
    color: white;
    font-weight: bold;
    padding: 0.5rem;
    max-width: 500px;
    display: flex;
    align-items: center;
    &:hover {
      color: var(--mid-color);
      transition: 200ms ease-in;
      cursor: pointer;
    }
  }

  span .icon {
    padding: 0.5rem;
    color: white;
    &:hover {
      color: var(--mid-color);
      transition: 200ms ease-in;
      cursor: pointer;
    }
  }
`;

export default StyledFooter;
