import styled from "styled-components";
import Navbar from "./Navbar";

const StyledNavbar = styled(Navbar)`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  background-color: rgba(255, 255, 255, 0.8);
  background-image: linear-gradient(45deg, #fdfdfd, #fff4f9);
  color: rgba(16, 16, 16, 0.5);
  padding-inline: min(30vw, 25rem);

  position: fixed;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  height: 4rem;

  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
  }

  li {
    font-size: 1.2rem;
    margin-left: 2rem;
    cursor: pointer;
    &:hover {
      transition: all ease-in-out 350ms;
      color: rgba(16, 16, 16, 0.7);
    }
  }
`;

export default StyledNavbar;
