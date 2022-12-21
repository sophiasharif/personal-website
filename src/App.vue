<template>
  <HeroSection :routerShown="routerShown" ref="grid"/>
  <nav>
    <button @click="handleDissolve">Dissolve</button>
  </nav>
  <div id="router" :class="{hidden: !routerShown}">
    <router-view/>
  </div>
</template>

<script>
import HeroSection from './components/HeroSection.vue'

export default {
  name: 'App',
  components: {
    HeroSection
  },
  data() {
    return {
      routerShown: false,
      test: "auto"
    }
  },
  methods: {
    handleDissolve() {
      this.routerShown = !this.routerShown;
      this.$refs.grid.dissolveGrid();
    },
    getRouterPointerEvents() {
      if (this.routerShown) {
        return "auto"
      } else {
        return "none"
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Poppins:wght@400;700&family=Roboto+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');

button {
  pointer-events: auto;
}

#app {
  font-family: Roboto Mono, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  pointer-events: none;
  margin: 0;
  padding: 0;
  background: #191919;
  color: white;
  /* gradient background */
  background: linear-gradient(to right, red, blue, red);
  background-size: 200%;
  animation: background-pan 5s ease infinite;
}
nav {
  position: absolute;
  right: 400px;
  top: 300px;
}
#router {
  position: absolute;
  top: 200px;
  right: 630px;
  z-index: -1;
  transition: opacity .5s ease;
  pointer-events: v-bind(getRouterPointerEvents());
}
.hidden {
  opacity: 0;
}
@keyframes background-pan {
  from {
    background-position: 0% center;
  }
  to {
    background-position: -200% center;
  }
}

</style>
