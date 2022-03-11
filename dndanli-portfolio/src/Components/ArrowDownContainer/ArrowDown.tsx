import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-scroll";

type ArrowDownProps = {
  className: string;
};

const ArrowDown = ({ className }: ArrowDownProps) => {
  return (
    <div className={className}>
      <Link to="skills" spy={true} smooth={true} offset={-50} duration={800}>
        <IoIosArrowDown className="arrow-down-icon" />
      </Link>
    </div>
  );
};

export default ArrowDown;
