import styled from "styled-components";
import Navbar from "./Navbar";

const StyledNavbar = styled(Navbar)`
  font-family: "Inter", sans-serif;
  font-weight: 400;

  background-image: linear-gradient(45deg, #fdfdfd, #fff4f9);
  background-color: rgba(255, 255, 255, 0.8);

  color: rgba(16, 16, 16, 0.7);

  height: 4rem;
  position: fixed;
  width: 100vw;
  ul {
    padding: 0 30rem 0 30rem;
    list-style-type: none;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  li {
    margin-left: 2rem;
    cursor: pointer;
    &:hover {
      transition: all ease-in-out 350ms;
      color: rgba(16, 16, 16, 0.7);
    }
  }
`;

export default StyledNavbar;
