import styled from "styled-components";
import Contact from "./Contact";

const StyledContact = styled(Contact)`
  display: flex;
  padding-block: min(500vh, 15rem);
  justify-content: center;
  .contact-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    max-width: 19rem;
    padding-inline: min(30vw, 0.5rem);
  }

  .link-button {
    width: 7rem;
  }
  .btn-text-input {
    font-size: 1.1rem;
  }
  #button a {
    text-decoration: none;
  }
  .contact-title,
  .contact-text {
    color: rgba(57, 62, 70, 0.9);
    margin-bottom: 1.5rem;
  }
  .email {
    font-weight: 400;
    color: rgba(57, 62, 70, 0.9);
  }
  .email .contact-text {
    margin-top: 1.5rem;
  }
  .contact-socials {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .link-button {
    margin-top: 1.5rem;
  }
`;

export default StyledContact;
