import StyledProjectCard from "../../ProjectCard/ProjectCard.style";
import ProjectsData from "../../../Data/ProjectsData";

type ProjectsProps = {
  className: string;
};
const Projects = ({ className }: ProjectsProps) => {
  return (
    <div className={className} id="projects">
      <div id="recent-works">
        <h1>Recent works</h1>
      </div>
      <div className="projects-container">
        {ProjectsData.map((project) => {
          return (
            <StyledProjectCard
              className="project-card"
              projectImgPath={project.imgUrl}
              projectUrl={project.projectUrl}
              sourceCodeUrl={project.sourceCodeUrl}
              projectTitle={project.title}
              projectDescription={project.desc}
              projectStack={project.stack}
              isLive={project.isLive}
              video={project.video}
              key={project.id}
            ></StyledProjectCard>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
