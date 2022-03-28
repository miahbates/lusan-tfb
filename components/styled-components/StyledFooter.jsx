import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: var(--dark-color);
  position: sticky;
  bottom: 0;
  width: 100%;
  margin-top: 2rem;
  padding-bottom: 2rem;

  .footer-about {
    text-align: center;
    padding: 0.5rem;
  }

  .footer-contact {
    text-align: center;
    padding: 0.5rem;
  }

  .footer-links {
    color: white;
    font-size: 1rem;
    text-decoration: none;

    &:hover {
      color: var(--mid-color);
      transition: 200ms ease-in;
    }
  }

  p {
    font-size: 1rem;
    color: white;
    font-weight: bold;
    padding: 0.5rem;
    &:hover {
      color: var(--mid-color);
      transition: 200ms ease-in;
    }
  }
`;

export default StyledFooter;
