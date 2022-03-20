import { IoCheckmarkCircle } from "react-icons/io5";

type SkillsetCardProp = {
  className: string;
  skillsetTitle: string;
  skillset: string[];
};

const SkillsetCard = ({
  className,
  skillsetTitle,
  skillset,
}: SkillsetCardProp) => {
  return (
    <div className={className}>
      <div className="skill-title">
        <h1>{skillsetTitle}</h1>
      </div>
      <ul className="skills-list">
        {/*indexes as keys just for now*/}
        {skillset.map((skill, index) => {
          return (
            <li className="skill-list-item" key={index}>
              <IoCheckmarkCircle className="checkmark-icon" /> {skill}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SkillsetCard;
