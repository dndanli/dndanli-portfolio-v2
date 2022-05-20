import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const StyledProjectCard = styled(ProjectCard)`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  min-width: 19rem;
  min-height: 36rem;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: min(30vw, 1rem);
  border-radius: 15px;
  border: solid 0.5px rgba(16, 16, 16, 0.2);
  transition: 0.5s ease;

  .project-image-wrapper {
    padding-block: min(30vh, 1.5rem);
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .project-image-wrapper img {
    max-width: 300px;
    max-height: 200px;
  }

  .project-info-wrapper > div {
    padding-block: min(30vh, 1rem);
  }

  .project-title {
    text-align: center;
    color: rgba(16, 16, 16, 0.8);
  }

  .project-description {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    color: rgba(16, 16, 16, 0.8);
  }

  .project-stack {
    color: rgba(16, 16, 16, 0.8);
    list-style-type: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .project-stack li {
    margin-left: 0.5rem;
  }
  .project-buttons {
    margin-top: 2rem;
    position: absolute;
    bottom: 1%;
    left: 2%;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .link-button {
    border-radius: 0.8rem;
    width: 7rem;
    margin-right: 1rem;
  }

  .btn-text-input {
    font-size: 19px;
  }

  .project-buttons a {
    text-decoration: none;
  }
  &:hover {
    transform: scale(1.05);
    transition: 0.5s ease;
  }
`;

export default StyledProjectCard;
