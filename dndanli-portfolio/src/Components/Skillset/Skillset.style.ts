import styled from "styled-components";
import Skillset from "./Skillset";

const StyledSkillset = styled(Skillset)`
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid rgba(16, 16, 16, 0.1);
  background-color: #ffffff;
  height: 37rem;
  ul {
    list-style-type: none;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .skill-li {
    margin-bottom: 1rem;
    color: rgba(16, 16, 16, 0.8);
  }

  .skill-icon {
    font-size: 2.8rem;
    color: #4eb1a2;
    margin-bottom: 2rem;
  }

  .skill-title {
    margin-bottom: 1rem;
    color: rgba(16, 16, 16, 0.9);
  }

  .skill-info {
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 2rem;
    color: rgba(16, 16, 16, 0.9);
  }
`;

export default StyledSkillset;