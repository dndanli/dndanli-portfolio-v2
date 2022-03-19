import styled from "styled-components";
import About from "./About";

const StyledAbout = styled(About)`
  padding-block: min(20vh, 10rem);
  padding-inline: min(30vw, 25rem);
  background-color: #fdfdfd;
  background-image: linear-gradient(45deg, #fdfdfd, #fff4f9);

  #name {
    color: #eb89b5;
  }

  #about-title {
    color: #76508e;
  }

  #buttons {
    margin-top: 2rem;
  }
  #buttons a {
    font-size: 1rem;
    text-decoration: none;
  }
  #buttons > :nth-child(even) {
    margin-left: 1rem;
  }
  #buttons {
    display: flex;
  }

  .greetings {
    font-size: 1.7rem;
    font-family: "Inter", sans-serif;
    font-weight: 700;
    color: rgba(16, 16, 16, 0.9);
    width: 100%;
  }

  .about-text {
    margin-top: 2rem;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    width: 100%;
    color: rgba(16, 16, 16, 0.7);
    p {
      margin: 1rem 0 1rem 0;
    }
  }
`;

export default StyledAbout;
