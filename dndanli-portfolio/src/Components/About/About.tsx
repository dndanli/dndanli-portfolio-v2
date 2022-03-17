import StyledLinkButton from "../Button/Button.style";

type AboutProps = {
  className: string;
};

const About = ({ className }: AboutProps) => {
  return (
    <div className={className}>
      <div className="greetings">
        <div>
          <h1>
            HEY! I'M
            <span id="name"> DANIEL DE LIMA</span>
          </h1>
          <h1>
            A <span id="about-title">DIGITAL CRAFTSMAN</span>
          </h1>
        </div>
      </div>
      <div className="about-text">
        <p>
          I'm a full-stack developer that specializes in building high quality
          web based software.
        </p>
        <p>
          Since you're here why don't you check my skills and projects down
          below?
        </p>
        <div id="buttons">
          <StyledLinkButton
            className="link-button"
            textInput="LinkedIn"
            link="https://www.linkedin.com/in/daniel-de-lima-a07aa8223/"
            inputBgColor="black"
            inputColor="white"
          ></StyledLinkButton>

          <StyledLinkButton
            className="link-button"
            textInput="GitHub"
            link="https://github.com/dndanli"
            inputBgColor="#d0e0f6"
            inputColor="black"
          ></StyledLinkButton>
        </div>
      </div>
    </div>
  );
};

export default About;
