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
          I'm
          <span id="span-greeting-1"> Daniel De Lima</span>
        </h1>
        <h1>
          a <span id="span-gretting-2">Digital Craftsman</span>
        </h1>
      </div>

      <div className="about-text">
        <div>
          <p>
            I'm a full-stack developer that specializes in building high quality
            web based software.
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
          inputBgColor="#fc85ae"
          inputColor="white"
        ></StyledLinkButton>

        <StyledLinkButton
          className="link-button"
          textInput="GitHub"
          link="https://github.com/dndanli"
          inputBgColor="#9e579d"
          inputColor="white"
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
