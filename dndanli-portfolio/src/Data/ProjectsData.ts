import P1 from "../Assets/decide-my-meal-m.png";
import P2 from "../Assets/expenses-tracker-m.png";

const ProjectsData: {
  id: number;
  imgUrl: string;
  title: string;
  desc: string;
  isLive: boolean;
  stack: string[];
}[] = [
  {
    id: 1,
    imgUrl: P1,
    title: "Decide my meal",
    desc: "A website to help people decide what to eat and where to eat.",
    isLive: true,
    stack: [
      "TypeScript",
      "ReactJs",
      "Nodejs",
      "Express",
      "TomTom API",
      "Heroku",
    ],
  },
  {
    id: 2,
    imgUrl: P2,
    title: "Expenses Tracker",
    desc: "A project to help users keep track of their monthly finances.",
    isLive: false,
    stack: ["Python", "Django", "SQLite3", "HTML", "CSS", "JavaScript"],
  },
];

export default ProjectsData;
