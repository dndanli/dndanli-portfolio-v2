import { Link } from "react-scroll";

type NavbarProps = {
  className: string;
};

const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={className}>
      <ul>
        <Link to="skills" spy={true} smooth={true} offset={-160} duration={800}>
          <li>SKILLS</li>
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-60}
          duration={800}
        >
          <li>PROJECTS</li>
        </Link>
        <Link
          to="contact-section"
          spy={true}
          smooth={true}
          offset={34}
          duration={1200}
        >
          <li>CONTACT</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
