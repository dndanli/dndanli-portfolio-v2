import StyledAbout from "./Components/About/About.style";
import GlobalStyle from "./Components/GlobalStyles/GlobalStyles";
import StyledProjects from "./Components/Projects/Projects.style";
import StyledArrowDown from "./Components/ArrowDownContainer/ArrowDown.style";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <div>
        <StyledAbout className="about-section" />
        <StyledArrowDown className="arrow-down" />
        <StyledProjects className="projects" />
      </div>
    </div>
  );
}

export default App;
