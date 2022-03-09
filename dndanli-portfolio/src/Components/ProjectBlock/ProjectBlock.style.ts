import styled from "styled-components";
import ProjectBlock from "./ProjectBlock";

const StyledProjectBlock = styled(ProjectBlock)`
  margin-bottom: 5rem;
  display: flex;
  width: 49vw;
  padding: 0.8rem;

  .project-img {
    width: 500px;
    height: 240px;
    margin-top: 0.5rem;
  }

  .project-img:nth-child(odd) {
    margin-right: 1.5rem;
  }

  .project-desc,
  .project-title,
  .project-stack {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    color: rgba(23, 23, 23, 0.8);
  }
  .project-desc {
    width: 500px;
    margin-right: 4rem;
  }

  .project-title {
    font-size: 1.5rem;
  }

  .project-stack {
    display: flex;
  }

  .item {
    margin-right: 0.5rem;
  }

  .project-links {
    margin-top: 3rem;
    margin-right: 1.2rem;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export default StyledProjectBlock;
