import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: var(--dark-color);
  bottom: 0;
  width: 100%;
  padding-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &:hover {
    color: var(--mid-color);
    transition: 200ms ease-in;
  }

  @media screen and (max-width: 768px) {
    .footer {
      flex-direction: row;
      padding-top: 0.5rem;

      &:hover {
        color: var(--mid-color);
        transition: 200ms ease-in;
      }
    }
    .span {
      font-size: 0.5rem;
    }
  }

  @media screen and (max-width: 320px) {
    .footer {
      flex-direction: row;
      padding-top: 0.5rem;

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
