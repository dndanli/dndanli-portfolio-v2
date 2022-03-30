import StyledLinkButton from "../../LinkButton/LinkButton.style";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-scroll";

type AboutProps = {
  className: string;
};

const About = ({ className }: AboutProps) => {
  return (
    <div className={className}>
      <div className="greetings">
        <h1>
          I'm Daniel
          <span id="span-greeting-1"> De Lima</span>
        </h1>
        <h1>
          a <span id="span-greeting-2">Digital Craftsman</span>
        </h1>
      </div>

      <div className="about-text">
        <div>
          <p>
            I'm a full-stack developer that specializes in building web based
            software.
          </p>
          <p>
            Since you're here why don't you check my skills and projects down
            below?
          </p>
        </div>
      </div>

      <div className="buttons-wrapper">
        <StyledLinkButton
          className="link-button"
          textInput="LinkedIn"
          link="https://www.linkedin.com/in/daniel-de-lima-a07aa8223/"
          inputBgColor="#f6c4ed"
          inputColor="rgba(16, 16, 16, 0.8)"
        ></StyledLinkButton>

        <StyledLinkButton
          className="link-button"
          textInput="GitHub"
          link="https://github.com/dndanli"
          inputBgColor="#ffcaa6"
          inputColor="#082032"
        ></StyledLinkButton>
      </div>

      <div className="arrow-down-icon">
        <Link to="skills" spy={true} smooth={true} offset={-100} duration={800}>
          <IoIosArrowDown />
        </Link>
      </div>
    </div>
  );
};

export default About;
