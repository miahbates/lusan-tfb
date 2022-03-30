import styled from "styled-components";

const StyledComparisonGrid = styled.div`
  margin: 2rem;
  background: pink;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: repeat(2, calc(25% - 0.5rem));
  gap: 1rem;
  overflow: scroll;

  span {
    text-align: left;
    padding: 1rem 1rem 1rem 0;
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
