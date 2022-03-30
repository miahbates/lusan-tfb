import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: var(--dark-color);
  position: sticky;
  bottom: 0;
  width: 100%;
  margin-top: 3rem;
  padding-bottom: 1rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 20%;

  .footer-about {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    text-decoration: none;
    text-align: center;
  }

  .footer-contact {
    text-decoration: none;
    text-align: center;
    font-size: 1rem;
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

  p {
    font-size: 1rem;
    color: white;
    font-weight: bold;
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
