import styled from "styled-components";
import ArrowDown from "./ArrowDown";
const StyledArrowDown = styled(ArrowDown)`
  display: flex;
  justify-content: center;
  margin-top: 6rem;
  margin-bottom: 8rem;
  cursor: pointer;

  .arrow-down-icon {
    width: 65px;
    height: 65px;
    color: rgba(16, 16, 16, 0.6);
    &:hover {
      color: #ffc295;
      transition: 0.5s all ease-in-out;
    }
  }
`;

export default StyledArrowDown;
