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

  #frontend > .skillset-card {
    background-color: #f6c4ed;
    background-image: linear-gradient(315deg, #e1dae6 0%, #f6c4ed 74%);
  }

  #backend > .skillset-card {
    background-color: #ffcaa6;
    background-image: linear-gradient(315deg, #f9d1b7 0%, #ffcaa6 74%);
  }

  #tools > .skillset-card {
    background-color: #f2ddc1;
    background-image: linear-gradient(315deg, #f2ddc1 0%, #fbe9d7 74%);
  }

  .skillset-card {
    margin-bottom: 10%;
  }

  #skill-header-title {
    color: rgba(16, 16, 16, 0.8);
    margin-bottom: 1rem;
  }
`;

export default StyledSkills;
