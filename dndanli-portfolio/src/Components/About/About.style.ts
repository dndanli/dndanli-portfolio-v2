import styled from "styled-components";
import About from "./About";

const StyledAbout = styled(About)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 30rem 0 30rem;
  #hey {
    font-family: "Bodoni Moda", serif;
    color: #ffc295;
  }

  #dev {
    font-size: 18rem;
    position: absolute;
    top: 2rem;
    left: 2rem;
    color: rgba(16, 16, 16, 0.2);
    opacity: 30%;
  }

  #job {
    text-decoration: underline;
    text-decoration-color: #ffc295;
  }

  .greetings {
    font-size: 1.7rem;
    display: flex;
    justify-content: space-between;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    color: rgba(16, 16, 16, 0.8);
  }

  .profile-pic {
    border-radius: 100px;
    margin-left: 5rem;
    margin-top: 2rem;
    z-index: 1;
  }

  .about-text {
    margin-top: 3rem;
    font-family: "Helvetica", sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    width: 100%;
    color: rgba(16, 16, 16, 0.7);
    h2 {
      margin: 1rem 0 1rem 0;
    }
  }
`;

export default StyledAbout;
