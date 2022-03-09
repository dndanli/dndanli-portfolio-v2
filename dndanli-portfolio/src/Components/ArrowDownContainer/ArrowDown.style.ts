import styled from "styled-components";
import ArrowDown from "./ArrowDown";
const StyledArrowDown = styled(ArrowDown)`
  display: flex;
  justify-content: center;
  margin-top: 10rem;
  margin-bottom: 10rem;

  .arrow-down-icon {
    width: 65px;
    height: 65px;
    color: rgba(23, 23, 23, 0.5);
    &:hover {
      color: rgba(23, 23, 23, 0.8);
      transition: 0.5s all ease-in-out;
    }
  }
`;

export default StyledArrowDown;
