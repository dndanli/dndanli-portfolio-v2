import StyledLinkButton from "../LinkButton/LinkButton.style";

type ProjectCardProps = {
  className: string;
  projectImgPath: string;
  projectTitle: string;
  projectUrl?: string;
  sourceCodeUrl: string;
  projectDescription: string;
  projectStack: string[];
  isLive: boolean;
  video?: string;
};

const ProjectCard = ({
  className,
  projectImgPath,
  projectUrl,
  sourceCodeUrl,
  projectTitle,
  projectDescription,
  projectStack,
  isLive,
  video,
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

        <ul className="project-stack">
          {projectStack.map((tool, index) => {
            return <li key={index}>{tool}</li>;
          })}
        </ul>

        <div className="project-buttons">
          {isLive === true ? (
            <StyledLinkButton
              className="link-button"
              textInput="See live"
              link={projectUrl}
              inputBgColor="rgba(16, 16, 16, 0.3)"
              inputColor="white"
            ></StyledLinkButton>
          ) : null}

          {video !== undefined ? (
            <StyledLinkButton
              className="link-button"
              textInput="See Video"
              link={video}
              inputBgColor="rgba(16, 16, 16, 0.3)"
              inputColor="white"
            ></StyledLinkButton>
          ) : null}

          <StyledLinkButton
            className="link-button"
            textInput="GitHub"
            link={sourceCodeUrl}
            inputBgColor="rgba(16, 16, 16, 0.3)"
            inputColor="white"
          ></StyledLinkButton>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
