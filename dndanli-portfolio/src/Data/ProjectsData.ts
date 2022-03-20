import P1 from "../Assets/decide-my-meal-m.png";
import P2 from "../Assets/expenses-tracker-m.png";
import P3 from "../Assets/health-promotion.png";

const ProjectsData: {
  id: number;
  imgUrl: string;
  title: string;
  desc: string[];
  stack: string[];
}[] = [
  {
    id: 1,
    imgUrl: P1,
    title: "Decide my meal",
    desc: [
      "A website to help people decide what to eat and where to eat.",
      "Enter a city, state and options of food you would like to try. The food will be decided randomly and a list of nearby restaurants that serves that food will be given to you.",
    ],
    stack: [
      "TypeScript",
      "ReactJs",
      "Styled Components",
      "Nodejs",
      "Express",
      "Heroku",
    ],
  },
  // {
  //   id: 2,
  //   imgUrl: P2,
  //   title: "expenses tracker",
  //   desc: "A project to help users keep track of their monthly finances.",
  //   stack: ["Python", "Django", "SQLite3", "HTML", "CSS", "JavaScript"],
  // },
  // {
  //   id: 3,
  //   imgUrl: P3,
  //   title: "health promotion",
  //   desc: "A website that allows users to check their blood pressure levels and BMI index.",
  //   stack: [
  //     "Java",
  //     "SpringBoot",
  //     "AWS",
  //     "MySql",
  //     "Html",
  //     "Bootstrap",
  //     "JavaScript",
  //   ],
  // },
];

export default ProjectsData;
