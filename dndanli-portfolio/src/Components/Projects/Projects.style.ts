import styled from "styled-components";
import Projects from "./Projects";

const StyledProjects = styled(Projects)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: min(30vw, 25rem);
  padding-block: min(30vh, 3rem);

  .projects-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .project-block:nth-child(odd) {
    flex-direction: row-reverse;
  }
  .project-block:nth-child(even) {
    .project-desc {
      margin-left: 1rem;
    }
  }

  #projects-title {
    font-size: 2.4rem;
    font-family: "Inter", sans-serif;
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin-bottom: 3rem;
    color: rgba(16, 16, 16, 0.9);
  }
`;

export default StyledProjects;
