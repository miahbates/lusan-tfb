import styled from "styled-components";
// import Image from "next/image";

const StyledWishListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--light-color);
  margin: 0 auto;
  text-align: center;
  border: var(--mid-color);
  padding: 1rem;
  border-radius: 10%;
  width: 200px;
  height: 200px;

  img {
    width: 100%;
    height: auto;
  }
`;

export default StyledWishListItem;
