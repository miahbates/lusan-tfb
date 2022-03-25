import styled from "styled-components";

const StyledProductCard = styled.div`
  display: flex;
  background-color: var(--light-secondary-color);
  border: 1px solid var(--dark-color);

  img {
    max-width: 100%;
    display: block;
  }

  .product-img-container {
    width: 30%;
  }

  .tag-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  .info-container {
    padding-left: 15px;
    max-width: 80%;
  }
`;

export default StyledProductCard;
