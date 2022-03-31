import styled from "styled-components";

const StyledSearchBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  input[type="text"] {
    font-family: var(--poppins-font);
    font-size: 0.8rem;
    border-radius: 10px;
    background-color: var(--light-color);
    color: var(--dark-secondary-color);
    width: 100%;
    border: none;
  }

  input[type="text"]:focus {
    outline: 2px solid var(--dark-color);
  }

  .search-border {
    border: none;
    padding: 0.5rem 0.5rem;
    margin: 0;
    display: flex;
    align-items: center;
    border: 4px solid var(--mid-color);
    border-radius: 20px;
    background-color: var(--light-color);
  }

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  .icon-searchbar {
    height: 1.8rem;
    width: auto;
    color: var(--dark-color);
    margin-left: 0.5rem;
  }

  @media only screen and (min-width: 678px) {
    .search-border {
      margin-bottom: 1.5rem;
      margin-top: 3rem;
    }
    input[type="text"] {
      font-size: 1.2rem;
      padding: 0.25;
    }
  }
`;

export default StyledSearchBar;
