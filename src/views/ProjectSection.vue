<template>
  <header>
    <h2>Projects</h2>
    <div class="description">
      <h3>
        Here are some of the projects I'm proud of. Click on the link icon to
        see a live demo or on the YouTube icon to see me walk through the
        project!
      </h3>
    </div>
  </header>
  <div class="card-list">
    <ProjectCard
      date="May 20, 2021"
      title="Personal Website"
      :skills="['Vue', 'Firebase', 'JavaScript', 'CSS',  'HTML']"
      description="I took this as an opportunity to get creative with CSS and strengthen my Firebase skills!"
      demoLink="https://www.youtube.com"
      youtubeLink="youtube.com"
      githubLink="github.com"
      class="card"
    />
    <ProjectCard
      date="May 20, 2021"
      title="LA Hacks"
      :skills="['React', 'JavaScript', 'Sass', 'HTML']"
      description="I'm on the Tech team of the largest hackathon in Southern California! I worked with the Design team and created several components throughout the website."
      demoLink="https://lahacks.com/"
      walkthroughLink="youtube.com"
      githubLink="github.com"
      class="card"
    />
    <ProjectCard
      date="May 20, 2021"
      title="Poll Data String Processor"
      :skills="['C++']"
      description="I did this project at part of my CS31 class."
      demoLink="sophiasharif.com"
      walkthroughLink="youtube.com"
      githubLink="github.com"
      class="card"
    />
    <ProjectCard
      date="May 20, 2021"
      title="Personal Website version 1"
      :skills="['Python', 'Flask', 'Bootstrap', 'HTML']"
      description="I focused on the back-end on the first version of this website. I used Flask for the backend and Bootstrap for the front end."
      demoLink="sophiasharif.com"
      walkthroughLink="youtube.com"
      class="card"
    />
  </div>
</template>

<script>
import ProjectCard from "../components/ProjectCard.vue";
export default {
  components: { ProjectCard },
};
</script>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
}
header h2 {
  font-size: 2rem;
}
header .description {
    max-width: 850px;
    text-align: center;
}
header .description h3 {
    font-weight: 400;
}
.card-list {
  display: flex;
  justify-content: center;
  padding: 3rem;
  overflow-x: scroll;
}
.card:hover {
  transform: translateY(-1rem) rotate(3deg);
}
.card:hover ~ .card {
  transform: translateX(160px);
}
.card:not(:first-child) {
  margin-left: -130px;
}
</style>
