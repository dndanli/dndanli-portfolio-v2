import React from "react";
import StyledAbout from "./Components/About/About.style";
import GlobalStyle from "./Components/GlobalStyles/GlobalStyles";
import { IoIosArrowDown } from "react-icons/io";
import StyledProjects from "./Components/Projects/Projects.style";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <div>
        <StyledAbout className="about-section" />
        <div className="arrow-down-div">
          <a href="#projects">
            <IoIosArrowDown className="arrow-down-icon" />
          </a>
        </div>
        <StyledProjects className="projects" />
      </div>
    </div>
  );
}

export default App;
