import StyledAbout from "./Components/About/About.style";
import GlobalStyle from "./Components/GlobalStyles/GlobalStyles";
import StyledProjects from "./Components/Projects/Projects.style";
import StyledArrowDown from "./Components/ArrowDownContainer/ArrowDown.style";
import StyledNavbar from "./Components/Navbar/Navbar.style";
import StyledSkills from "./Components/Skills/Skills.style";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <div>
        <StyledNavbar className="nav" />
        <StyledAbout className="about-section" />
        <StyledArrowDown className="arrow-down" />
        <StyledSkills className="skills-section" />
        <StyledProjects className="projects" />
      </div>
    </div>
  );
}

export default App;
