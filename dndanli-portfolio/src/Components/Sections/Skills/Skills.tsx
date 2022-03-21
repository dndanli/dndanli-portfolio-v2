import { SkillsData } from "../../../Data/SkillsData";
import StyledSkillsetCard from "../../Skillset/SkillsetCard.style";

type SkillsProps = {
  className: string;
};

const Skills = ({ className }: SkillsProps) => {
  return (
    <div className={className} id="skills">
      <div id="skill-title">
        <h1>What I'm skilled at</h1>
      </div>

      <div className="skills-container">
        {SkillsData.map((object) => {
          return (
            <div id={object.id.toString()} key={object.id}>
              <StyledSkillsetCard
                className="skillset-card"
                skillsetTitle={object.title}
                skillset={object.skills}
              ></StyledSkillsetCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
