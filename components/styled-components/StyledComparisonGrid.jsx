import styled from "styled-components";

const StyledComparisonGrid = styled.div`
  display: flex;
  flex-direction: row;

  span {
    text-align: left;
    padding: 1rem;
  }

  /* margin: 2rem;
  background: pink;
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 0.5rem));
  grid-template-rows: repeat(4, calc(25% - 0.5rem));
  gap: 1rem; */

  /* span {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 2rem;
   
  }

  span */
`;

export default StyledComparisonGrid;
