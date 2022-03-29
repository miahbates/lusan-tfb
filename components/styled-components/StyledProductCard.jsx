import styled from "styled-components";

// margin: 1rem;
// padding: 1rem 1rem 1.5rem 1rem;

const StyledProductCard = styled.div`
  border: 4px solid var(--mid-color);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  height: 100%;
  width: 100%;
  max-width: 300px;
  margin: 0;
  display: flex;
  flex-direction: column;

  .title-wishlist {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .info-container {
    padding: 1rem 1rem 1.5rem 1rem;
    flex: 1;
  }

  img {
    width: 100%;
    display: block;
    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    height: 200px;
  }

  h2 {
    font-family: var(--sora-font);
    font-size: 1.1rem;
  }

  .tag-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0.125rem 0.125rem 2rem 0;
  }

  span {
    margin: 0.125rem;
    font-family: var(--sora-font);
    font-size: 0.9rem;
  }

  p {
    font-family: var(--sora-font);
    font-size: 0.9rem;
    margin: 0 0 1rem 0.25rem;
  }

  a {
    padding: 0.5rem;
    margin: 1rem;
    font-size: 1.1rem;
    font-family: var(--sora-font);
  }
`;

export default StyledProductCard;
