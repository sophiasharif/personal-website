import { createRouter, createWebHistory } from "vue-router";
import ProjectSection from "../views/ProjectSection";
import SkillSection from "../views/SkillSection";
import AchievementSection from "../views/AchievementSection";

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
    path: "/skills",
    name: "Skills",
    component: SkillSection,
  },
  {
    path: "/achievements",
    name: "Achievements",
    component: AchievementSection,
  },
];

const router = createRouter({ 
    history: createWebHistory(process.env.BASE_URL),
    routes 
});

export default router;
