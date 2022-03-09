import styled from "styled-components";
import Projects from "./Projects";

const StyledProjects = styled(Projects)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  .project-block:nth-child(odd) {
    flex-direction: row-reverse;
  }

  #projects-title {
    font-size: 1.5rem;
    font-family: "Montserrat", sans-serif;
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin-bottom: 3rem;
    color: rgba(23, 23, 23, 0.9);
  }
`;

export default StyledProjects;
