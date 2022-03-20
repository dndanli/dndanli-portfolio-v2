import styled from "styled-components";
import SkillsetCard from "./SkillsetCard";

const StyledSkillsetCard = styled(SkillsetCard)`
  min-width: 22rem;
  min-height: 17rem;
  background-color: rgba(83, 59, 91, 0.9);
  color: rgba(250, 250, 250, 0.8);
  border-radius: 1.5rem;

  .skill-title {
    text-align: center;
    padding-top: 1rem;
  }

  .skills-list {
    padding: 1rem;
    list-style-type: none;
    -webkit-column-count: 2; /* Chrome/Opera, Safari */
    -webkit-column-gap: 7rem;
    -moz-column-count: 2; /* Mozilla Firefox */
    -moz-column-gap: 7rem;
    column-count: 2;
    column-gap: 7rem;
  }

  .skill-list-item {
    margin-bottom: 10%;
  }

  &:hover {
    transform: scale(1.05);
    transition: 0.5s ease;
  }
`;

export default StyledSkillsetCard;
