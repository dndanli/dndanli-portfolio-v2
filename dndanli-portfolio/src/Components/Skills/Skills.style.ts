import styled from "styled-components";
import Skills from "../Skills/Skills";

const StyledSkills = styled(Skills)`
  font-family: "Inter", sans-serif;
  font-weight: 400;

  #skills-header {
    font-size: 2.4rem;
    padding: 2rem 30rem 1rem 30rem;
    color: rgba(16, 16, 16, 0.9);
  }
  .skillset-wrapper {
    display: flex;
    justify-content: center;
    padding: 6rem 30rem 4rem 30rem;
    height: 77vh;
    margin-bottom: 5rem;
  }

  .skillset:nth-child(1) {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  .skillset:nth-child(3) {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export default StyledSkills;
