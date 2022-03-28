import styled from "styled-components";

// margin: 1rem;
// padding: 1rem 1rem 1.5rem 1rem;

const StyledProductCard = styled.div`
  border: 4px solid var(--mid-color);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  margin: 2rem;

  .title-wishlist {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .info-container {
    padding: 1rem 1rem 1.5rem 1rem;
  }

  img {
    max-width: 100%;
    display: block;
    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  h2 {
    font-family: var(--sora-font);
    font-size: 1.2rem;
  }

  .tag-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0.125rem 0.125rem 2rem 0;
  }

  span {
    margin: 0.125rem;
    font-family: var(--raj-font);
    font-size: 1rem;
  }

  p {
    font-family: var(--sora-font);
    font-size: 0.9rem;
    margin: 0 0 1rem 0.25rem;
  }

  a {
    padding: 0.5rem;
    margin-left: 0.25rem;
  }
`;

export default StyledProductCard;

// display: flex;
//   background-color: var(--light-secondary-color);
//   border: 1px solid var(--dark-color);

//   img {
//     max-width: 100%;
//     display: block;
//   }

//   .product-img-container {
//     width: 30%;
//   }

//   .tag-container {
//     display: flex;
//     flex-wrap: wrap;
//     width: 100%;
//   }

//   .info-container {
//     padding-left: 15px;
//     max-width: 80%;
//   }
