import styled from "styled-components";
import Skills from "../Skills/Skills";

const StyledSkills = styled(Skills)`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  padding-block: min(20vh, 2rem);
  padding-inline: min(30vw, 25rem);

  #skills-header {
    padding-block: min(15vh, 4rem);
    font-size: 2.4rem;
    color: rgba(16, 16, 16, 0.9);
  }

  .skillset-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 77vh;
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
