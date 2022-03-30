import styled from "styled-components";
import Projects from "./Projects";

const StyledProjects = styled(Projects)`
  display: flex;
  flex-direction: column;
  align-items: center;
  .project-card {
    margin-bottom: 10%;
  }
  #recent-works {
    font-family: "Inter", sans-serif;
    color: rgba(16, 16, 16, 0.8);
    margin-block: 1rem;
  }
`;

export default StyledProjects;
