import styled from "styled-components";

const StyledComparisonGrid = styled.div`
  margin: 1rem 0.5rem;
  padding: 0.5rem;
  display: grid;
  grid-template-columns: repeat(${(p) => p.count + 1}, minmax(250px, 1fr));
  grid-template-rows: repeat(2, calc(25% - 0.5rem));
  overflow-x: scroll;
  text-align: left;

  a {
    border-bottom: 1px solid black;

    display: inline-block;
    width: fit-content;
  }

  p {
    text-align: left;
    padding: 1rem 0.5rem;
    margin: 0.125rem;
    font-size: 1rem;
    font-family: var(--sora-font);
    word-break: break-all;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  p:first-child {
    background: var(--light-color);
    border: 2px solid var(--light-secondary-color);
  }

  p:nth-child(2) {
    background: var(--light-secondary-color);
  }

  p:nth-child(3) {
    background: var(--second-mid-color);
  }

  p:nth-child(4) {
    background: var(--mid-color);
  }

  p:nth-child(5) {
    background-color: #03826b;
  }

  @media (min-width: 677px) {
    p {
      font-size: 0.9rem;
    }
  }
`;

export default StyledComparisonGrid;
