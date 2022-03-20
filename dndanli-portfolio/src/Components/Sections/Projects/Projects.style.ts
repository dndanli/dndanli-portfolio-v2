import styled from "styled-components";
import Projects from "./Projects";

const StyledProjects = styled(Projects)`
  display: flex;
  flex-direction: column;
  align-items: center;
  .project-card {
    margin-bottom: 10%;
  }
`;

export default StyledProjects;
