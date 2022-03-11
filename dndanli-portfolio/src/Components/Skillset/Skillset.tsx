type SkillsetProp = {
  className: string;
  skillIcon: JSX.Element;
  skillInfo: string;
  skillsetTitle: string;
  skillset: string[];
};

const Skillset = ({
  className,
  skillIcon,
  skillInfo,
  skillsetTitle,
  skillset,
}: SkillsetProp) => {
  return (
    <div className={className}>
      <div className="skill-icon">{skillIcon} </div>
      <h1 className="skill-title">{skillsetTitle}</h1>
      <p className="skill-info">{skillInfo}</p>
      <ul>
        {/*indexes as keys just for now*/}
        {skillset.map((skill, index) => {
          return (
            <li className="skill-li" key={index}>
              {skill}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Skillset;
