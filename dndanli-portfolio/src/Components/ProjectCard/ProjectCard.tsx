import StyledLinkButton from "../LinkButton/LinkButton.style";

type ProjectCardProps = {
  className: string;
  projectImgPath: string;
  projectTitle: string;
  projectDescription: string;
  projectStack: string[];
  isLive: boolean;
};

const ProjectCard = ({
  className,
  projectImgPath,
  projectTitle,
  projectDescription,
  projectStack,
  isLive,
}: ProjectCardProps) => {
  return (
    <div className={className}>
      <div className="project-image-wrapper">
        <img src={projectImgPath} alt={projectTitle} />
      </div>
      <div className="project-info-wrapper">
        <div className="project-title">
          <h2>{projectTitle}</h2>
        </div>

        <div className="project-description">
          <p>{projectDescription}</p>
        </div>

        <div className="project-stack-container">
          {/* TODO: replace index for id for each key */}
          <ul className="project-stack">
            {projectStack.map((tool, index) => {
              return <li key={index}>{tool}</li>;
            })}
          </ul>
        </div>

        <div className="project-buttons">
          {isLive === true ? (
            <StyledLinkButton
              className="link-button"
              textInput="See live"
              link="https://github.com/dndanli"
              inputBgColor="rgba(16, 16, 16, 0.3)"
              inputColor="white"
            ></StyledLinkButton>
          ) : null}

          <StyledLinkButton
            className="link-button"
            textInput="GitHub"
            link="https://github.com/dndanli"
            inputBgColor="rgba(16, 16, 16, 0.3)"
            inputColor="white"
          ></StyledLinkButton>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
