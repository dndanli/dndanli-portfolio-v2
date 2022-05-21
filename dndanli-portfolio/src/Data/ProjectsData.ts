import P1 from "../Assets/decide-my-meal-m.png";
import P2 from "../Assets/expenses-tracker-m.png";
import P3 from "../Assets/health-promotion.png";
import P4 from "../Assets/my-movie-list.png";

const ProjectsData: {
  id: number;
  imgUrl: string;
  projectUrl?: string;
  sourceCodeUrl: string;
  title: string;
  desc: string;
  isLive: boolean;
  stack: string[];
  video?: string;
}[] = [
  {
    id: 1,
    imgUrl: P1,
    projectUrl: "https://decidemymeal.com/",
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
    id: 4,
    imgUrl: P3,
    sourceCodeUrl: "https://github.com/tsorteberg/HealthPromotion",
    video: "https://www.youtube.com/watch?v=a4vElq9no4A",
    title: "Health Promotion",
    desc: "A web application to check users' Blood pressure levels and BMI index, built with a team of 4 students.",
    isLive: false,
    stack: ["Java", "Spring Boot", "AWS", "MySQL", "JavaScript", "HTML", "CSS"],
  },
  {
    id: 2,
    imgUrl: P4,
    sourceCodeUrl: "https://github.com/dndanli/My-movie-list",
    title: "My Movie List",
    desc: "Building a web platform where users can review, and keep track of their favorite movies and TV shows (Currently in development).",
    isLive: false,
    stack: [
      "TypeScript",
      "PostgreSQL",
      "Nodejs",
      "Express",
      "ReactJs",
      "The Movie DB Api",
    ],
  },
  {
    id: 3,
    imgUrl: P2,
    sourceCodeUrl: "https://github.com/dndanli/Expenses-tracker",
    title: "Expenses Tracker",
    desc: "A project to help users keep track of their monthly finances.",
    isLive: false,
    stack: ["Python", "Django", "SQLite3", "HTML", "CSS", "JavaScript"],
  },
];

export default ProjectsData;
