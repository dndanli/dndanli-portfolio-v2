import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const StyledProjectCard = styled(ProjectCard)`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  min-width: 19rem;
  min-height: 36rem;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: min(30vw, 1rem);

  background-color: #2d3339;
  background-image: linear-gradient(45deg, #373331, #452b45);

  .project-image-wrapper {
    padding-block: min(30vh, 1.5rem);
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .project-image-wrapper img {
    max-width: 300px;
    max-height: 200px;
    border-radius: 1rem;
  }

  .project-info-wrapper > div {
    padding-block: min(30vh, 1rem);
  }

  .project-title {
    text-align: center;
    color: rgba(250, 250, 250, 0.9);
  }

  .project-description {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    color: rgba(250, 250, 250, 0.7);
  }

  .project-stack {
    color: rgba(250, 250, 250, 0.7);
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
    display: flex;
    justify-content: space-evenly;
  }

  .link-button {
    border-radius: 0.8rem;
    width: 7rem;
  }
  .btn-text-input {
    font-size: 19px;
  }

  .project-buttons a {
    text-decoration: none;
  }
`;

export default StyledProjectCard;
