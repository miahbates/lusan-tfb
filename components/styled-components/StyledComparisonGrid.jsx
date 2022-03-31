import styled from "styled-components";

const StyledComparisonGrid = styled.div`
  margin: 1rem;
  padding: 0.5rem;
  display: grid;
  grid-template-columns: repeat(${(p) => p.count + 1}, minmax(250px, 1fr));
  grid-template-rows: repeat(2, calc(25% - 0.5rem));
  overflow-x: scroll;
  text-align: left;

  p {
    text-align: left;
    padding: 1rem;
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
    background: var(--dark-color);
  }

  @media (max-width: 768px) {
    p {
      font-size: 0.8rem;
    }
  }
`;

export default StyledComparisonGrid;
