import styled from "styled-components";
import Contact from "./Contact";

const StyledContact = styled(Contact)`
  padding-inline: min(60vw, 25rem);
  padding-block: min(20vh, 5rem);

  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 70vh;
  font-family: "Inter", sans-serif;
  color: rgba(250, 250, 250, 0.8);
  background-color: #171617;
  padding-top: 17rem;

  .contact-title {
    font-size: 3rem;
  }

  a {
    text-decoration: none;
  }

  .email {
    color: #eb89b5;
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
