import { GoLinkExternal, GoMarkGithub } from "react-icons/go";

type ProjectBlockProps = {
  className: string;
  projectImgUrl: string;
  projectTitle: string;
  projectDesc: string;
  projectStack: string[];
};

const ProjectBlock = ({
  className,
  projectImgUrl,
  projectTitle,
  projectDesc,
  projectStack,
}: ProjectBlockProps) => {
  return (
    <div className={className}>
      <img className="project-img" src={projectImgUrl} alt={projectTitle}></img>

      <div className="project-desc">
        <div className="project-title">
          <h3>{projectTitle.toLowerCase()}</h3>
        </div>

        <p>{projectDesc}</p>

        <div className="project-stack">
          {/* leave keys as index fow now*/}
          {projectStack.map((item, index) => {
            return (
              <p key={index} className="item">
                {item}
              </p>
            );
          })}
        </div>

        <GoLinkExternal className="project-links" />
        <GoMarkGithub className="project-links" />
      </div>
    </div>
  );
};

export default ProjectBlock;
