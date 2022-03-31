import styled from "styled-components";

const StyledConditionFilters = styled.div`
  background-color: var(--light-color);
  margin: 1rem;
  padding: 1rem;
  border-bottom-style: solid;
  border-color: var(--mid-color);
  background-color: var(--light--color);
  display: flex;
  justify-content: space-evenly;
  max-width: 1000px;
  flex-grow: 1;

  button {
    background-color: var(--light-color);
    color: var(--dark-color);
    text-align: center;
    transition: all 300ms;
    border: none;
    font-family: var(--sora-font);
    font-size: 1.1rem;
  }

  p {
    text-align: center;
    color: var(--dark-color);
  }

  .clear-filter {
    border-radius: 5%;
  }

  .filter-button {
    height: 3rem;
    width: 3rem;
  }

  .filter-button:hover {
    background-color: var(--dark-color);
    color: var(--light-color);
    cursor: pointer;
    border-radius: 20%;
  }

  .filter-icon:hover {
    background-color: var(--dark-color);
    color: var(--light-color);
    border-radius: 20%;
    cursor: pointer;
  }

  .filter-icon {
    color: var(--light--color);
  }

  .label-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  div {
    display: flex;
    flex-direction: row;
    font-family: var(--sora-font);
    font-size: 0.8rem;
    justify-content: center;
  }

  @media (max-width: 500px) {
    .label {
      display: none;
    }
    button {
      font-size: 0.8rem;
    }
  }
`;

export default StyledConditionFilters;
