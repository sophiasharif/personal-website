<template>
  <div id="router" :class="{ hidden: !routerShown }">
    <Transition name="fade">
    <router-view v-if="routerShown"/>
    </Transition>
    
  </div>
  <HeroSection :routerShown="routerShown" ref="grid" />
  <nav>
    <router-link @click="revealGrid" to="/">
      <button>Home</button>
    </router-link>
    <router-link @click="handleRouteChange" to="/projects">
      <button>Projects</button>
    </router-link>
    <router-link to="/skills">
      <button @click="handleRouteChange">Skills + Coursework</button>
    </router-link>
    <router-link to="/achievements">
      <button @click="handleRouteChange">Achievements</button>
    </router-link>
    <router-link to="#">
      <button @click="handleRouteChange">Blog</button>
    </router-link>
    <router-link to="#">
      <button @click="handleRouteChange">About Me</button>
    </router-link>
  </nav>
</template>

<script>
import HeroSection from "./views/HeroSection.vue";

export default {
  name: "App",
  components: {
    HeroSection,
  },
  data() {
    return {
      routerShown: false,
      test: "auto",
      transition: "opacity 1.1s cubic-bezier(.86,-0.03,.75,.05)"
    };
  },
  methods: {
    dissolveGrid() {
      this.transition = "opacity .4s cubic-bezier(.57,.08,.21,.26)"
      this.routerShown = true;
      this.$refs.grid.dissolveGrid();
    },
    revealGrid() {
      this.routerShown = false;
      this.$refs.grid.revealGrid();
    },
    transitionGrid() {
      this.transition = "opacity 1.1s cubic-bezier(.86,-0.03,.75,.05)"
      this.$refs.grid.transitionGrid();
    },
    getRouterPointerEvents() {
      if (this.routerShown) {
        return "auto";
      } else {
        return "none";
      }
    },
    handleRouteChange() {
      if (!this.routerShown) {
        this.dissolveGrid()
      } else {
        this.transitionGrid()
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Poppins:wght@400;700&family=Roboto+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap");
.fade-enter-active,
.fade-leave-active {
  transition: v-bind(transition);
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
#app {
  font-family: Roboto Mono, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html, body {
  height: 100%;
  overflow: hidden;
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
@keyframes background-pan {
  from {
    background-position: 0% center;
  }
  to {
    background-position: -200% center;
  }
}
nav {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  padding-left: 10px;
  padding-top: 5px;
}
button {
  pointer-events: auto;
  font: inherit;
  background: #17141d;
  border: none;
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 12%;
  box-shadow: 0rem 0rem 1.5rem;
  color: white;
  margin-right: 20px;
}
a {
  text-decoration: none;
  color: white;
}

#router {
  z-index: -1;
  transition: opacity 0.5s ease;
  pointer-events: v-bind(getRouterPointerEvents());
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.hidden {
  opacity: 0;
}
</style>
