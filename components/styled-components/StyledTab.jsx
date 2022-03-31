import styled from "styled-components";

const StyledTab = styled.div`
  background-color: var(--light-color);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 1rem 1rem 0 1rem;
  padding: 0;
  border-bottom-style: solid;
  border-color: var(--light-secondary-color);

  div {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    height: 4rem;
  }
  div:hover {
    cursor: pointer;
    background-color: var(--dark-color);
    color: var(--light-color);
  }
`;

export default StyledTab;
