import styled from "styled-components";
import Contact from "./Contact";

const StyledContact = styled(Contact)`
  padding: 0 30rem 0 30rem;
  color: rgba(16, 16, 16, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

  font-family: "Montserrat", sans-serif;
  .contact-title {
    margin-top: 17rem;
    font-size: 3rem;
  }

  a {
    text-decoration: none;
    color: #fcd1b4;
  }

  .email {
    color: #4eb1a2;
  }

  .contact-text {
    font-size: 1.3rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .contact-socials {
    display: flex;
    align-items: center;
  }

  #button {
    margin-left: 1rem;
  }
`;

export default StyledContact;
