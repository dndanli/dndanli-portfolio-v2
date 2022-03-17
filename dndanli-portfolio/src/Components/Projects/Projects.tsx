import StyledProjectBlock from "../ProjectBlock/ProjectBlock.style";
import ProjectsData from "../../ProjectsData/ProjectsData";

type ProjectsProp = {
  className: string;
};

const Projects = ({ className }: ProjectsProp) => {
  return (
    <div className={className} id="all-projects">
      <h2 id="projects-title">Projects</h2>
      {ProjectsData.map((project) => {
        return (
          <StyledProjectBlock
            key={project.id}
            className="project-block"
            projectImgUrl={project.imgUrl}
            projectTitle={project.title}
            projectDesc={project.desc}
            projectStack={project.stack}
          />
        );
      })}
    </div>
  );
};

export default Projects;
