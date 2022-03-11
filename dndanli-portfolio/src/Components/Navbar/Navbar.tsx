import { Link } from "react-scroll";

type NavbarProps = {
  className: string;
};

const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={className}>
      <ul>
        <Link to="skills" spy={true} smooth={true} offset={-90} duration={800}>
          <li>SKILLS</li>
        </Link>
        <Link
          to="all-projects"
          spy={true}
          smooth={true}
          offset={-34}
          duration={800}
        >
          <li>PROJECTS</li>{" "}
        </Link>
        <li>CONTACT</li>
      </ul>
    </div>
  );
};

export default Navbar;
