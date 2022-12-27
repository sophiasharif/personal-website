<template>
  <article class="card">
    <header class="card-header">
      <p>{{ date }}</p>
      <h2>{{ title }}</h2>
      <section class="skills">
        <div class="skill" v-for="skill in skills" :key="skill">
          {{ skill }}
        </div>
      </section>
      <p>{{ description }}</p>
      <a :href="demoLink" v-if="demoLink" target="_blank"
        ><ion-icon name="link-outline"></ion-icon
      ></a>
      <a :href="githubLink" v-if="githubLink" target="_blank">
        <ion-icon name="logo-github"></ion-icon
      ></a>
      <a :href="youtubeLink" v-if="youtubeLink" target="_blank"
        ><ion-icon name="logo-youtube"></ion-icon
      ></a>
    </header>
  </article>
</template>

<script>
import transX from '../composables/getTranslationX'
import rot from '../composables/getRotation'

export default {
  props: [
    "date",
    "title",
    "skills",
    "description",
    "demoLink",
    "youtubeLink",
    "githubLink",
    "index",
    "nCards"
  ],
  data() {
    return {
      degSpanMobile: 8,
      degSpanTablet: 12,
      xSpanMobile: 10,
      xSpanTablet: 20,
    }
  },
  computed: {
    mqMobile() {
      return window.matchMedia("(max-width: 480px)");
    },
    mqTablet() {
      return window.matchMedia("(max-width: 770px)");
    },
    degSpan() {
      if (this.mqMobile.matches) {
        return this.degSpanMobile;
      } else {
        return this.degSpanTablet;
      }
    },
    xSpan() {
      if (this.mqMobile.matches) {
        return this.xSpanMobile;
      } else {
        return this.xSpanTablet;
      }
    },
    rotation() {
      return rot(this.degSpan, this.nCards, this.index);
    },
    translationX() {
      return transX(this.xSpan, this.nCards, this.index);
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  position: relative;
  flex-direction: column;
  height: 400px;
  width: 300px;
  min-width: 250px;
  padding: 1.5rem;
  transition: 0.2s;

  border-radius: 16px;
  background: #17141d;
  box-shadow: -1rem 0 2.5rem #000;
}
.skills {
  display: flex;
  flex-wrap: wrap;
}
.skill {
  background: #f18805;
  margin: 5px;
  padding: 3px 8px;
  border-radius: 10px;
  font-weight: 800;
  font-size: 16px;
}
ion-icon {
  color: white;
  font-size: 2rem;
  margin: 0.5rem;
}
</style>
