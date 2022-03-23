import styled from "styled-components";
import Navbar from "./Navbar";

const StyledNavbar = styled(Navbar)`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  color: rgba(250, 250, 250, 0.8);
  display: flex;
  justify-content: center;
  min-height: 4rem;
  padding-block: min(30vh, 0.5rem);

  ul {
    list-style-type: none;
    display: flex;
    background-color: rgba(250, 250, 250, 0.1);
    align-items: center;
    justify-content: space-evenly;
    min-height: 3.5rem;
    min-width: 22rem;
    position: fixed;
    border-radius: 1.05rem;
    backdrop-filter: blur(10px);
  }

  li {
    font-size: 1rem;
    cursor: pointer;
    &:hover {
      transition: all ease-in-out 350ms;
      color: rgba(250, 250, 250, 0.9);
    }
  }
`;

export default StyledNavbar;
