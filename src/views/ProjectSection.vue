<template>
  <div class="wrapper">
    <header>
      <h2>Projects</h2>
      <div id="description">
        <h3 v-if="!mqTablet.matches">
          For a more technical overview, see
          <a
            href="https://github.com/sophiasharif/resume/blob/main/Sophia-Sharif-public-resume.pdf"
            target="_blank"
            >my resume</a
          >
          or
          <a href="https://www.linkedin.com/in/sophia-sharif/" target="_blank"
            >my LinkedIn</a
          >. Click on the link icon to see a live demo or the GitHub icon to see
          the source code!
        </h3>
        <h3 v-else>Tap the cards to navigate!</h3>
      </div>
    </header>
    <div class="card-list">
      <ProjectCard
        class="card"
        v-for="(project, index) in projects"
        :key="project.title"
        :date="project.date"
        :title="project.title"
        :skills="project.skills"
        :description="project.description"
        :demoLink="project.demoLink"
        :youtubeLink="project.youtubeLink"
        :githubLink="project.githubLink"
        :class="project.class"
        :index="index"
        :nCards="projects.length"
        @click="handleClick"
      />
    </div>
  </div>
</template>

<script>
import ProjectCard from "../components/ProjectCard.vue";

export default {
  components: { ProjectCard },
  computed: {
    mqMobile() {
      return window.matchMedia("(max-width: 480px)");
    },
    mqTablet() {
      return window.matchMedia("(max-width: 770px)");
    },
  },
  data() {
    return {
      projects: [
        {
          date: "March 2023",
          title: "UCLA Major Explorer",
          skills: ["Python", "Selenium", "D3.js"],
          description:
            "To help students plan their schedules, I used Selenium to web scrape major requirements and course prerequisites from the UCLA course schedule and created a class dependency DAG visualization with D3.",
          githubLink: "https://github.com/sophiasharif/ucla-course-webscraping",
        },
        {
          date: "June 2023",
          title: "Random Byte Generator",
          skills: ["C", "Makefile", "Shell", "x86-64"],
          description:
            "Used inline assembly for CPU capability checks and hardware RNG. Manually managed memory, optimized output mechanisms, debugged with valgrind and a custom make check program.",
          githubLink: "https://github.com/sophiasharif/CS35L/tree/main/lab-5",
        },
        {
          date: "January 2023",
          title: "Personal Blog",
          skills: ["Vue", "Firebase", "JavaScript", "Quill", "HTML/CSS"],
          description:
            "My blog's features include user authentication, photo uploading and storage, CRUD operations, a rich text editor, and a smart mosaic photo gallery!",
          demoLink: "https://blog.sophiasharif.com/",
          githubLink: "https://github.com/sophiasharif/blog",
        },
        {
          date: "July 2023",
          title: "View Counter",
          skills: ["JavaScript", "Express.js", "Google Sheets API"],
          description:
            "This project tracks page views by embedding an invisible pixel. Each invisible pixel request to the server increments the view count for the corresponding page on a Google Sheet!",
          githubLink: "https://github.com/sophiasharif/view-counter",
        },
      ],
    };
  },
  methods: {
    handleClick() {
      if (window.innerWidth <= 1050) this.projects.unshift(this.projects.pop());
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: underline;
  color: paleturquoise;
}
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
header {
  display: flex;
  flex-direction: column;
  align-items: center;
}
header h2 {
  font-size: 2rem;
  margin-top: 0;
}
header h3 {
  margin: 0;
}
header #description {
  max-width: 700px;
  text-align: center;
  margin-bottom: 1rem;
}
header #description h3 {
  font-weight: 400;
}
.card-list {
  display: flex;
  justify-content: center;
  height: 400px;
  margin-bottom: 2rem;
}
/* hover animation for desktop */
@media (min-width: 1050px) {
  .card:hover {
    transform: translateY(-1rem) rotate(3deg);
  }
  .card:hover ~ .card {
    transform: translateX(160px);
  }
  .card:not(:first-child) {
    margin-left: -130px;
  }
}
</style>
