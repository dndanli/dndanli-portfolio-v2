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
    background-color: rgba(255, 255, 255, 0.9);
  }

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
  .projects-section, .contact-section{
    @media only screen and (min-width: 500px){
      .project-image-wrapper img {
        max-width: 370px;
        max-height: 280px;
      }
      .contact-wrapper{
        font-size: 1.3rem;
        min-width: 33rem;
      }
    }
  }

  .about-section{
    @media only screen and (min-width: 678px){
      .greetings{
          font-size: 1.3rem;
      }
    }
  }

  .skills-section, .about-section, .contact-section{
    @media only screen and (min-width: 769px){
      .skills-container{
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 3rem;
      }
      .skillset-card{
        min-width: 19rem;
        margin-bottom: 0;
      }
      #tools{
        grid-column: 1/3;
        .skill-list-item{
          margin-left: 7rem;
        }
      } 
      .greetings{
        font-size: 1.5rem;
      }
      .contact-title {
        font-size: 3rem;
        margin-bottom: 2rem;
      }
      .contact-text{
        min-height: 10rem;
        font-size: 1.6rem;
        margin-bottom: 0;
      }

      .email{
        font-size: 1.7rem;
        margin-top: -3rem;
      }
   
      .contact-wrapper{
        padding-block: min(25vh, 7rem);
        min-width: 45rem;
      } 
    }
  }

  .projects-section, .skills-section, .about-section{
    @media only screen and (min-width: 1200px){
      .greetings{
        font-size: 1.8rem;
      }
      .about-text{
        font-size: 1.6rem;
      }
      .skillset-card{
        min-width: 23rem;
      }
      .project-card{
        max-width: 23rem;
        .btn-text-input {
          font-size: 17px;
        }
      }

      .project-image-wrapper img {
        max-width: 330px;
        max-height: 230px;
      }

      .projects-container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 3rem
      }
      #recent-works, #skill-header-title{
        font-size: 1.3rem;
        margin-bottom: 1.5rem;
      }      
    }
  }

  .contact-section{

    @media only screen and (min-width: 1200px){
      .contact-wrapper{
          min-width: 50rem;
      } 
      .contact-text{
        font-size: 1.6rem;
      } 
    }
  }
  
`;

export default GlobalStyle;
