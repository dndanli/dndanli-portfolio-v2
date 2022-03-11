import { SkillsData, SkillInfoData } from "./SkillsData";
import StyledSkillset from "../Skillset/Skillset.style";
import { GoTools } from "react-icons/go";
import { SiMinds } from "react-icons/si";
import { HiOutlineCode } from "react-icons/hi";

type SkillsProps = {
  className: string;
};

const Skills = ({ className }: SkillsProps) => {
  return (
    <div className={className} id="skills">
      <h2 id="skills-header">Here is what I'm skilled at</h2>
      <div className="skillset-wrapper">
        <StyledSkillset
          className="skillset"
          skillIcon={<HiOutlineCode />}
          skillInfo={SkillInfoData[0]}
          skillsetTitle="What I speak"
          skillset={SkillsData[0].skills}
        ></StyledSkillset>
        <StyledSkillset
          className="skillset"
          skillIcon={<SiMinds />}
          skillInfo={SkillInfoData[1]}
          skillsetTitle="What I know"
          skillset={SkillsData[1].skills}
        ></StyledSkillset>
        <StyledSkillset
          className="skillset"
          skillIcon={<GoTools />}
          skillInfo={SkillInfoData[2]}
          skillsetTitle="What I use"
          skillset={SkillsData[2].skills}
        ></StyledSkillset>
      </div>
    </div>
  );
};

export default Skills;
