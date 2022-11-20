<template>
  <HeroSection/>
  <SkillsAndProjects/>
</template>

<script>
import HeroSection from './components/HeroSection.vue'
import SkillsAndProjects from './components/SkillsAndProjects.vue'

export default {
  name: 'App',
  components: {
    HeroSection, SkillsAndProjects
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Poppins:wght@400;700&family=Roboto+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');

#app {
  font-family: Roboto Mono, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0;
  padding: 0;
  background: #191919;
  color: white;
}
</style>
