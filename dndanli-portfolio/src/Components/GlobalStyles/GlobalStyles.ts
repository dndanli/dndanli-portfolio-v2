import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;   
  }

  body{
    
    padding-inline: min(80vw, 10rem);
    background-color: #48284A;
    background-image: linear-gradient(45deg, #121417, #48284A);

    @media only screen and (max-width: 600px){
        padding-inline: min(80vw, 2rem);

    }
  }


 


  
`;

export default GlobalStyle;
