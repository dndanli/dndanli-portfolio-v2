import StyledLinkButton from "../Button/Button.style";

type ContactProps = {
  className: string;
};

const Contact = ({ className }: ContactProps) => {
  return (
    <div className={className}>
      <h1 className="contact-title">Would you like to chat?</h1>
      <div>
        <p className="contact-text">
          I'm currently seeking a job as a software developer, If you have any
          new opportunities and think I'm a good fit, let me know. Or contact me
          if you have any cool projects to work on.
        </p>
      </div>
      <div className="contact-socials">
        <h2>
          <span className="email">danielfcdelima@gmail.com</span> or on
        </h2>

        <div id="button">
          <StyledLinkButton
            className="link-button"
            textInput="LinkedIn"
            link="https://www.linkedin.com/in/daniel-de-lima-a07aa8223/"
            inputBgColor="#ffc295"
            inputColor="white"
          ></StyledLinkButton>
        </div>
      </div>
    </div>
  );
};

export default Contact;
