import StyledAbout from "./Components/Sections/About/About.style";
import GlobalStyle from "./Components/GlobalStyles/GlobalStyles";
import StyledNavbar from "./Components/Navbar/Navbar.style";
import StyledSkills from "./Components/Sections/Skills/Skills.style";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <div>
        <StyledNavbar className="nav" />
        <StyledAbout className="about-section" />
        <StyledSkills className="skills-section" />
      </div>
    </div>
  );
}

export default App;
