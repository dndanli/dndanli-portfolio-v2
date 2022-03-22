import P1 from "../Assets/decide-my-meal-m.png";
import P2 from "../Assets/expenses-tracker-m.png";
import P3 from "../Assets/cantus-music-m.png";

const ProjectsData: {
  id: number;
  imgUrl: string;
  projectUrl?: string;
  sourceCodeUrl: string;
  title: string;
  desc: string;
  isLive: boolean;
  stack: string[];
}[] = [
  {
    id: 1,
    imgUrl: P1,
    projectUrl: "http://decidemymeal.com/",
    sourceCodeUrl: "https://github.com/dndanli/decide-my-meal",
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
    sourceCodeUrl: "https://github.com/dndanli/Expenses-tracker",
    title: "Expenses Tracker",
    desc: "A project to help users keep track of their monthly finances.",
    isLive: false,
    stack: ["Python", "Django", "SQLite3", "HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    imgUrl: P3,
    sourceCodeUrl: "https://github.com/dndanli/Cantus-Music",
    title: "Cantus Music",
    desc: "A mockup audio streaming service (coming soon)",
    isLive: false,
    stack: ["React", "TypeScript", "Styled Components"],
  },
];

export default ProjectsData;
