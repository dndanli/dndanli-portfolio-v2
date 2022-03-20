import styled from "styled-components";
import Skills from "./Skills";

const StyledSkills = styled(Skills)`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  margin-bottom: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  .skillset-card {
    margin-bottom: 10%;
  }
`;

export default StyledSkills;
