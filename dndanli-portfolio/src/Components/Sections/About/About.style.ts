import styled from "styled-components";
import About from "./About";

const StyledAbout = styled(About)`
  display: flex;
  flex-direction: column;
  min-height: 40rem;
  padding-block: min(30vh, 5rem);

  .greetings {
    font-size: 1rem;
    font-family: "Inter", sans-serif;
    font-weight: 700;
    color: rgba(16, 16, 16, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .about-text {
    font-size: 17px;
    font-family: "Inter", sans-serif;
    font-weight: 400;

    margin-top: 2rem;
    padding-inline: min(30vw, 2rem);
    color: rgba(16, 16, 16, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .about-text p {
    margin-bottom: 1rem;
  }

  .buttons-wrapper {
    justify-content: center;
    margin-top: 2rem;
    display: flex;
  }

  .buttons-wrapper a {
    font-size: 15px;
    text-decoration: none;
  }

  .buttons-wrapper a:nth-child(odd) {
    margin-left: auto;
    margin-right: 2.5%;
  }

  .buttons-wrapper a:nth-child(even) {
    margin-left: 2.5%;
    margin-right: auto;
  }

  .link-button {
    width: 7rem;
  }
  .btn-text-input {
    font-size: 1.1rem;
  }

  .arrow-down-icon {
    margin-top: 20%;
    font-size: 3.5rem;
    display: flex;
    justify-content: center;
    color: rgba(16, 16, 16, 0.7);
    cursor: pointer;
    &:hover {
      color: rgba(16, 16, 16, 0.9);
      transition: 0.5s ease-in-out;
    }
  }
`;

export default StyledAbout;
