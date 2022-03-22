type LinkButtonProps = {
  className: string;
  textInput: string;
  link?: string;
  inputColor: string;
  inputBgColor: string;
};
const LinkButton = ({
  className,
  textInput,
  link,
  inputColor,
  inputBgColor,
}: LinkButtonProps) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div
        className={className}
        style={{ backgroundColor: inputBgColor, color: inputColor }}
      >
        <h2 className="btn-text-input">{textInput}</h2>
      </div>
    </a>
  );
};

export default LinkButton;
