import ProfilePic from "../../Assets/kwang-javier-qcRMfoIWxRo-unsplash.jpg";

type AboutProps = {
  className: string;
};

const About = ({ className }: AboutProps) => {
  return (
    <div className={className}>
      <h1 id="dev">DEVELOPER</h1>
      <div className="greetings">
        <div className="about-header">
          <h1>
            <span id="hey">Hey!</span> I'M DANIEL DE LIMA
          </h1>
          <h1>FULL-STACK DEVELOPER</h1>
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
        <p>
          I love to build tools for the web and solve problems through code.
        </p>
        <p>Currently seeking a junior developer job.</p>
        <p>Since you're here why don't you check my projects down below?</p>
      </div>
    </div>
  );
};

export default About;
