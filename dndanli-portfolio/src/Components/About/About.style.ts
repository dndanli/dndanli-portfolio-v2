import styled from "styled-components";
import About from "./About";

const StyledAbout = styled(About)`
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  #hey{
    font-family: 'Bodoni Moda', serif;
  }
  #dev{
    font-size: 18rem;
    position: absolute;
    top: 1rem;
    left: 2rem;
    color:rgba(23, 23, 23, 0.1);
    opacity: 30%;
  }
  .greetings {
    font-size: 1.7rem;
    display: flex;
    justify-content: space-between;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    color:rgba(23, 23, 23, 0.9);
  }

  .profile-pic {
    border-radius: 100px;
    margin-left: 5rem;
    margin-top: 2rem;
    z-index: 1;
  }

  .about-text {
    margin-top: 0.5rem;
    font-family: "Helvetica", sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    width: 40vw;
    color:rgba(23, 23, 23, 0.7);
  }
`;

export default StyledAbout;
