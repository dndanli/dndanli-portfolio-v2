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
  padding: 0 30rem 0 30rem;

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
