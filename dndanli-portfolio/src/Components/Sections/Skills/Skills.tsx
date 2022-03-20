import { SkillsData } from "../../../Data/SkillsData";
import StyledSkillsetCard from "../../Skillset/SkillsetCard.style";

type SkillsProps = {
  className: string;
};

const Skills = ({ className }: SkillsProps) => {
  return (
    <div className={className} id="skills">
      <h1 id="skill-title">What I'm skilled at</h1>
      {SkillsData.map((object) => {
        return (
          <StyledSkillsetCard
            className="skillset-card"
            skillsetTitle={object.title}
            skillset={object.skills}
            key={object.id}
          ></StyledSkillsetCard>
        );
      })}
    </div>
  );
};

export default Skills;
