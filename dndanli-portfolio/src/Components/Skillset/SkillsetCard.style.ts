import styled from "styled-components";
import SkillsetCard from "./SkillsetCard";

const StyledSkillsetCard = styled(SkillsetCard)`
  min-width: 19rem;
  min-height: 17rem;
  background-color: #393e46;
  color: rgba(250, 250, 250, 0.8);
  border-radius: 1.5rem;

  .skill-title {
    color: rgba(250, 250, 250, 0.8);
    text-align: center;
    padding-top: 1rem;
  }

  .skills-list {
    padding: 1rem;
    list-style-type: none;
    -webkit-column-count: 2; /* Chrome/Opera, Safari */
    -webkit-column-gap: 4rem;
    -moz-column-count: 2; /* Mozilla Firefox */
    -moz-column-gap: 4rem;
    column-count: 2;
    column-gap: 4rem;
  }

  .skill-list-item {
    margin-bottom: 10%;
  }
  .checkmark-icon {
    color: rgba(0, 173, 181, 0.9);
  }
`;

export default StyledSkillsetCard;
