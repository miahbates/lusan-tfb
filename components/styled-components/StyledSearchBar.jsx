import styled from "styled-components";

const StyledSearchBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  input[type="text"] {
    font-family: "Poppins";
    font-size: 0.8rem;
    padding: 0.25rem 1rem;
    border-radius: 10px;
    background-color: var(--light-color);
    color: var(--dark-secondary-color);
    max-width: 100%;
    border: none;
  }

  .search-border {
    border: 4px solid var(--dark-color);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    border-radius: 10px;
    background-color: var(--light-color);
  }
  .icon-searchbar {
    height: 1.8rem;
    width: auto;
    color: var(--dark-color);
    margin: 0;
    padding: 0.4rem;
  }

  @media only screen and (min-width: 678px) {
    .search-border {
      margin-top: 3rem;
      margin-bottom: 1.5rem;
    }
    input[type="text"] {
      font-size: 1.2rem;
      padding: 0.25;
    }
  }
`;

export default StyledSearchBar;
