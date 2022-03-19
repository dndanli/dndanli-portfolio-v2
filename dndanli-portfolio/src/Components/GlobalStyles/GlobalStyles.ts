import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;   
  }
  
  /* About section media queries */
  .about-section{
    @media only screen and (max-width: 1600px) {
      padding-inline: min(30vw, 15rem);
    }
    @media only screen and (max-width: 1200px) {
      .greetings {
        font-size: 1.4rem;
      }
      .about-text {
        font-size: 1.2rem;
      }
    }

    @media only screen and (max-width: 1025px) {
      padding-inline: min(30vw, 10rem);
      #name{
        display: table;
      }
      .greetings {
        font-size: 1.4rem;
      }
      .about-text {
        font-size: 1.2rem;
      }
    }

    @media only screen and (max-width: 769px) {
      padding-inline: min(30vw, 7rem);
      padding-block: min(20vh, 6rem);

      #buttons a{
        font-size: 1rem;
      }
      
      #buttons div{
        width: 7rem;
      }
    }
  
    @media only screen and (max-width: 570px){
      padding-inline: min(30vw, 4rem);
      .arrow-down{
        padding-top: 1rem;
        padding-bottom: 1rem;
      }
    }
  }

  .skills-section{
      @media only screen and (max-width: 1700px){
        padding-inline: min(30vw, 15rem);
      }

      @media only screen and (max-width: 1200px){
        .skill-title{
          font-size: 1.8rem;
        }        
      }

      @media only screen and (max-width: 1150px){
        padding-inline: min(30vw, 10rem); 
        .skill-title{
          font-size: 1.6rem;
        }  
      }

      @media only screen and (max-width: 900px){
        padding-inline: min(30vw, 4rem);
        padding-block: min(20vh, 2rem);

        .skillset{
          width:27rem;
          height: 30rem;
        }
        .skillset-wrapper{
          flex-direction: column;
        }
        #skills-header{
          display: flex;
          justify-content: center;
        }
      }

      @media only screen and (max-width: 500px){

        .skillset{
          width:18rem;
        }

      }
  }

  .projects-section{
    @media only screen and (max-width: 1600px){
      padding-inline:min(30vw, 15rem) ;
    }

    @media only screen and (max-width: 1200px){
      padding-inline: min(30vw, 8rem); 
    }

    @media only screen and (max-width: 1000px){
      padding-inline: min(30vw, 5rem); 
    }

    @media only screen and (max-width: 900px){
      .projects-wrapper{
        align-items: center;
      }
      
      .project-block:nth-child(odd){
        flex-direction: row-reverse;
        flex-direction: column;
      }
      
      .project-block:nth-child(even){
        flex-direction: column;
        .project-desc {
          margin-left: 0;
        }
      }

      .project-block{
        margin-bottom: 1.5rem;
      }

      .project-desc{
        width: 22rem
      }
    }

    @media only screen and (max-width: 490px){
      padding-inline: min(30vw, 1rem); 
      

      .project-img{
        width: 300px;
        height: 200px;
      }
      .project-desc{
        font-size: 13px;
        width: 15rem
      }
    }
  }



  
`;

export default GlobalStyle;
