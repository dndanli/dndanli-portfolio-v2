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
        <p>I'm a full-stack developer based in iowa.</p>
        <p>I was a student at the Des Moines Area Community College where</p>
        <p>
          for the last 2 years I've learned the fundamentals of front-end and
          back-end development.
        </p>
        <p id="job">I'm now currently seeking a junior developer job.</p>
        <p>
          Since you're here why don't you check my skills and projects down
          below?
        </p>
      </div>
    </div>
  );
};

export default About;
