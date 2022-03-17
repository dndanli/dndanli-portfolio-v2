type AboutProps = {
  className: string;
};

const About = ({ className }: AboutProps) => {
  return (
    <div className={className}>
      <div className="greetings">
        <div className="about-header">
          <h1>
            <span id="hey">Hey!</span> I'M DANIEL DE LIMA
          </h1>
          <h1>A DIGITAL CRAFTSMAN</h1>
        </div>
        <img
          className="profile-pic"
          src="https://avatars.githubusercontent.com/u/73452073?v=4"
          alt="daniel-profile-pic"
          width={150}
          height={150}
        ></img>
      </div>
      <div className="about-text">
        <h2>I'm a full-stack developer based in iowa.</h2>
        <h2>
          Since you're here why don't you check my skills and projects down
          below?
        </h2>
      </div>
    </div>
  );
};

export default About;
