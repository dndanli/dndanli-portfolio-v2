import styled from "styled-components";
import SkillsetCard from "./SkillsetCard";

const StyledSkillsetCard = styled(SkillsetCard)`
  min-width: 19rem;
  min-height: 17rem;
  color: rgba(16, 16, 16, 0.7);
  border-radius: 10px;

  .skill-title {
    color: rgba(16, 16, 16, 0.7);
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

  &:hover {
    transform: scale(1.05);
    transition: 0.5s ease;
  }
  transition: 0.5s ease;
`;

export default StyledSkillsetCard;
