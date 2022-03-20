import styled from "styled-components";
import Navbar from "./Navbar";

const StyledNavbar = styled(Navbar)`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  color: rgba(250, 250, 250, 0.8);
  display: flex;
  justify-content: center;
  min-height: 4rem;

  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
  }

  li {
    font-size: 1.1rem;
    cursor: pointer;
    &:hover {
      transition: all ease-in-out 350ms;
      color: rgba(250, 250, 250, 0.9);
    }
  }
`;

export default StyledNavbar;
