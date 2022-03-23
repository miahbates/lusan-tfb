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

  .tag-container span {
    margin-right: 10px;
    padding: 5px 10px;
    border-radius: 30px;
    color: var(--light-color);
  }

  .type-tag {
    background-color: var(--mid-color);
  }

  .water-tag {
    background-color: rgb(54, 106, 141);
  }

  .climate-tag {
    background-color: var(--dark-color);
  }

  .soil-tag {
    background-color: rgb(77, 59, 47);
  }

  .info-container {
    padding-left: 15px;
    max-width: 80%;
  }
`;

export default StyledProductCard;
