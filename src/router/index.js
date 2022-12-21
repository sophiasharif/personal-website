import { createRouter, createWebHistory } from "vue-router";
import AchievementDeck from "../components/AchievementDeck";

const routes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/achievements",
    name: "Achievements",
    component: AchievementDeck,
  },
];

const router = createRouter({ 
    history: createWebHistory(process.env.BASE_URL),
    routes 
});

export default router;
