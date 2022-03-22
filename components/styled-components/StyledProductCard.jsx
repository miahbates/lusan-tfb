import styled from "styled-components";

const StyledProductCard = styled.div`
  display: flex;
  background-color: var(--light-secondary-color);
  border: 1px solid var(--dark-color);

  img {
    max-width: 100%;
  }

  .product-img-container {
    width: 200px;
  }

  .info-container {
    padding-left: 15px;
  }
`;

export default StyledProductCard;
