import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const StyledProjectCard = styled(ProjectCard)`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  max-width: 27rem;
  min-height: 40rem;
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
    max-width: 400px;
    max-height: 300px;
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
    text-align: center;
    color: rgba(250, 250, 250, 0.7);
  }

  .project-stack {
    display: flex;
    justify-content: space-evenly;
    color: rgba(250, 250, 250, 0.7);
    list-style-type: none;
  }
  .project-stack li {
    margin-right: 0.5rem;
  }

  .project-buttons {
    display: flex;
    justify-content: space-evenly;
  }
  .link-button {
    border-radius: 0.8rem;
  }

  .project-buttons a {
    text-decoration: none;
  }
`;

export default StyledProjectCard;
