import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  list-style: none;
  li {
    padding: 0 1rem;
    margin: 0 2rem;
    justify-content: flex-start;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: var(--dark-color);
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    height: 50vh;
    width: 300px;
    padding: 1.5rem;
    display: none;
  }
`;

export default function LeftNav() {
  return (
    <Ul className="flex-row">
      <li>About Us</li>
      <li>All Seeds</li>
      <li>Flowers</li>
      <li>Herbs</li>
      <li>Vegetables</li>
      <li>Contact Us</li>
    </Ul>
  );
}
