import StyledAbout from "./Components/Sections/About/About.style";
import GlobalStyle from "./Components/GlobalStyles/GlobalStyles";
import StyledNavbar from "./Components/Navbar/Navbar.style";
import StyledSkills from "./Components/Sections/Skills/Skills.style";
import StyledProjects from "./Components/Sections/Projects/Projects.style";
import StyledContact from "./Components/Sections/Contact/Contact.style";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <StyledNavbar className="nav" />
      <StyledAbout className="about-section" />
      <StyledSkills className="skills-section" />
      <StyledProjects className="projects-section" />
      <StyledContact className="contact-section" />
    </div>
  );
}

export default App;
