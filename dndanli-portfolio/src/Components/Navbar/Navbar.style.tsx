import styled from "styled-components";
import Navbar from "./Navbar";

const StyledNavbar = styled(Navbar)`
  font-family: "Montserrat", sans-serif;
  padding: 0 30rem 0 30rem;
  color: rgba(16, 16, 16, 0.8);
  height: 4rem;
  ul {
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
      color: #ffc295;
    }
  }
`;

export default StyledNavbar;
