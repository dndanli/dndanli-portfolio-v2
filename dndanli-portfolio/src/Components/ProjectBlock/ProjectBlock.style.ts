import styled from "styled-components";
import ProjectBlock from "./ProjectBlock";

const StyledProjectBlock = styled(ProjectBlock)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60rem;
  .project-desc,
  .project-title,
  .project-stack {
    font-family: "Inter", sans-serif;
    color: rgba(16, 16, 16, 0.7);
  }

  .project-desc {
    padding: 1rem 2.5rem 1rem 1rem;
  }
  .project-img {
    width: 400px;
    height: 300px;
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(16, 16, 16, 0.2);

    &:hover {
      box-shadow: 0 0 15px rgba(16, 16, 16, 0.4);
      transition: all ease-in-out 0.5s;
    }
  }
  .project-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }

  .project-stack {
    display: flex;
    margin-top: 1rem;
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
