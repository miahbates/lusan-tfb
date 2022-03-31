import styled from "styled-components";

const StyledGridCover = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 1;
  justify-content: center;
  background-color: var(--dark-color);

  :hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 634px) {
    margin-bottom: 0.25rem;
  }
`;

export default StyledGridCover;
