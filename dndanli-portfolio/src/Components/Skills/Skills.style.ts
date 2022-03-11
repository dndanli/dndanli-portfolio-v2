import styled from "styled-components";
import Skills from "../Skills/Skills";
import BgSkills from "../../Assets/background-skills.svg";

const StyledSkills = styled(Skills)`
  font-family: "Montserrat", sans-serif;
  #skills-header {
    font-size: 2.4rem;
    margin: 10rem 30rem 3rem 30rem;
    color: rgba(16, 16, 16, 0.8);
  }
  .skillset-wrapper {
    display: flex;
    justify-content: center;
    padding: 2rem 30rem 5rem 30rem;
    height: 77vh;
    margin-bottom: 5rem;
    background-image: url(${BgSkills});
    background-repeat: no-repeat;
    background-size: cover;
  }

  .skillset:nth-child(1) {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  .skillset:nth-child(3) {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

    .skill-info {
      margin-bottom: 3rem;
    }
  }
`;

export default StyledSkills;
