import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;   
    padding: 0 30rem 0 30rem;
    background-color: rgb(250, 250, 250, 0.5);
  }
  .arrow-down-div{
    display: flex;
    justify-content: center;
    margin-top: 10rem;
    margin-bottom: 10rem;
  }

  .arrow-down-icon{
    width: 65px;
    height: 65px;
    color:rgba(23,23,23, 0.5);
    &:hover{
      color:rgba(23,23,23, 0.8);
      transition : 0.5s all ease-in-out;
    }
  }

`;

export default GlobalStyle;
