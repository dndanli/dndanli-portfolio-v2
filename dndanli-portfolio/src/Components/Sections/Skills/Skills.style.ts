import styled from "styled-components";
import Skills from "./Skills";

const StyledSkills = styled(Skills)`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  margin-top: 12rem;
  margin-bottom: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  .skillset-card {
    margin-bottom: 10%;
  }

  #skill-title {
    color: rgba(250, 250, 250, 0.8);
    margin-bottom: 1rem;
  }
`;

export default StyledSkills;
