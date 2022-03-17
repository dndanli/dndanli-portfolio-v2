import styled from "styled-components";
import ArrowDown from "./ArrowDown";
const StyledArrowDown = styled(ArrowDown)`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 3rem;
  cursor: pointer;
  background-color: #fdfdfd;
  background-image: linear-gradient(45deg, #fdfdfd, #fff4f9);

  .arrow-down-icon {
    width: 65px;
    height: 65px;
    color: rgba(16, 16, 16, 0.4);
    &:hover {
      color: #eb89b5;
      transition: 0.5s all ease-in-out;
    }
  }
`;

export default StyledArrowDown;
