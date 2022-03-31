import styled from "styled-components";

const StyledConditionFilters = styled.div`
  background-color: var(--light-color);
  margin: 1rem;
  padding: 1rem;
  border-bottom-style: solid;
  border-color: var(--mid-color);
  background-color: var(--light--color);
  display: flex;

  button {
    background-color: var(--light-color);
    color: var(--dark-color);
    text-align: center;
    transition: all 400ms;
    border: none;
  }
  .filter-button:hover {
    background-color: var(--dark-color);
    color: var(--light-color);
    cursor: pointer;
  }
  button:hover {
    cursor: pointer;
  }

  .filter-icon {
    color: var(--light--color);
  }
`;

export default StyledConditionFilters;
