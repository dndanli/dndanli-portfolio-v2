import StyledProjectCard from "../../ProjectCard/ProjectCard.style";
import ProjectsData from "../../../Data/ProjectsData";

type ProjectsProps = {
  className: string;
};
const Projects = ({ className }: ProjectsProps) => {
  return (
    <div className={className}>
      {ProjectsData.map((project) => {
        return (
          <StyledProjectCard
            className="project-card"
            projectImgPath={project.imgUrl}
            projectTitle={project.title}
            projectDescription={project.desc}
            projectStack={project.stack}
            isLive={project.isLive}
            key={project.id}
          ></StyledProjectCard>
        );
      })}
    </div>
  );
};

export default Projects;
