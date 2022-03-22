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
    padding-inline: min(80vw, 3rem);
    background-color: #48284A;
    background-image: linear-gradient(45deg, #121417, #48284A);
  }

  /* 320 - 480 mobile devices */
  .about-section{
    @media only screen and (min-width: 480px){
      .greetings{
        font-size: 1.2rem;
      }
      .about-text{
        font-size: 1.2rem;
      }
    }
  }
  .projects-section{
    @media only screen and (min-width: 500px){
      .project-image-wrapper img {
        max-width: 370px;
        max-height: 280px;
        border-radius: 1rem;
      }
    }
  }

  /* 481 - 678 Ipads tablets*/
  .about-section{
    @media only screen and (min-width: 678px){
      .greetings{
          font-size: 1.3rem;
      }
    }
  }

  .skills-section{
    @media only screen and (min-width: 769px){
      .skills-container{
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 3rem;
      }
      #tools{
        grid-column: 1/3;
        .skill-list-item{
          margin-left: 7rem;
        }
        
      }    
    }
  }
`;

export default GlobalStyle;
