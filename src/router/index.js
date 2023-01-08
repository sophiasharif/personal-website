import { createRouter, createWebHistory } from "vue-router";
import ProjectSection from "../views/ProjectSection";
import MathProjects from "../views/MathProjects";
import AchievementSection from "../views/AchievementSection";
import AboutMe from "../views/AboutMe";


const routes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/projects",
    name: "Projects",
    component: ProjectSection,
  },
  {
    path: "/math-papers",
    name: "MathProjects",
    component: MathProjects,
  },
  {
    path: "/achievements",
    name: "Achievements",
    component: AchievementSection,
  },
  {
    path: "/about-me",
    name: "AboutMe",
    component: AboutMe,
  },
];

const router = createRouter({ 
    history: createWebHistory(process.env.BASE_URL),
    routes 
});

export default router;
