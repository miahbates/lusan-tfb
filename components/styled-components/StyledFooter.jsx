import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: var(--dark-color);
  bottom: 0;
  width: 100%;
  padding-bottom: 1rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  @media screen and (min-width: 425px) {
    .footer {
      flex-direction: column;

      &:hover {
        color: var(--mid-color);
        transition: 200ms ease-in;
      }
    }
    .span {
      font-size: 0.5rem;
    }
  }

  .footer-about {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    text-decoration: none;
    text-align: center;
  }

  .footer-contact {
    color: white;
    text-decoration: none;
    text-align: center;
    font-size: 1rem;
    padding: 1rem;

    &:hover {
      color: var(--mid-color);
      transition: 200ms ease-in;
    }
  }

  .footer-links {
    color: white;
    text-decoration: none;
    text-align: center;
    font-size: 1rem;
    padding: 1rem;

    &:hover {
      color: var(--mid-color);
      transition: 200ms ease-in;
    }
  }

  span {
    font-size: 0.9rem;
    color: white;
    font-weight: bold;
    padding: 0.5rem;
    &:hover {
      color: var(--mid-color);
      transition: 200ms ease-in;
    }
  }

  .icon {
    color: white;
    &:hover {
      color: var(--mid-color);
      transition: 200ms ease-in;
    }
  }
`;

export default StyledFooter;
