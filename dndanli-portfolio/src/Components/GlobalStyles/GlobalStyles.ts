import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;   
    box-sizing: border-box;
  }
  body {  

    display: flex;
    justify-content: center;
    align-items: center;

    padding-inline: min(80vw, 10rem);
    background-color: #48284A;
    background-image: linear-gradient(45deg, #121417, #48284A);
  }


 


  
`;

export default GlobalStyle;
