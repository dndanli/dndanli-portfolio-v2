import StyledLinkButton from "../../LinkButton/LinkButton.style";

type ContactProps = {
  className: string;
};

const Contact = ({ className }: ContactProps) => {
  return (
    <div className={className} id="contact-section">
      <div className="contact-wrapper">
        <h1 className="contact-title">Would you like to chat?</h1>
        <div>
          <p className="contact-text">
            I'm currently seeking a job as a software developer. If you have any
            new opportunities and think I'm a good fit, let me know.
          </p>
        </div>
        <div className="contact-socials">
          <h2 className="email">danielfcdelima@gmail.com</h2>
          <div id="button">
            <StyledLinkButton
              className="link-button"
              textInput="LinkedIn"
              link="https://www.linkedin.com/in/daniel-de-lima-a07aa8223/"
              inputBgColor="#f6c4ed"
              inputColor="rgba(16, 16, 16, 0.9)"
            ></StyledLinkButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
