<template>
  <div id="router" :class="{ hidden: !routerShown }">
    <Transition name="fade">
      <router-view v-if="routerShown" />
    </Transition>
  </div>
  <HeroSection
    :routerShown="routerShown"
    ref="grid"
    @setOpacityTiming="setOpacityTiming"
  />
  <nav class="desktop">
    <router-link @click="handleRouteChange('Home')" to="/">
      <button>home</button>
    </router-link>
    <router-link @click="handleRouteChange('Projects')" to="/projects">
      <button>projects</button>
    </router-link>
    <router-link to="/math-papers">
      <button @click="handleRouteChange('MathProjects')">math papers</button>
    </router-link>
    <router-link to="/achievements">
      <button @click="handleRouteChange('Achievements')">achievements</button>
    </router-link>
    <router-link to="/about-me">
      <button @click="handleRouteChange('AboutMe')">about me</button>
    </router-link>
  </nav>
  <nav class="mobile">
    <ion-icon name="menu-outline" @click="toggleMenu"></ion-icon>
    <div class="links" :class="{ invisible: !menuToggled }">
      <router-link @click="handleRouteChange('Home')" to="/">
        <button>home</button>
      </router-link>
      <router-link @click="handleRouteChange('Projects')" to="/projects">
        <button>projects</button>
      </router-link>
      <router-link to="/math-papers">
        <button @click="handleRouteChange('MathProjects')">math papers</button>
      </router-link>
      <router-link to="/achievements">
        <button @click="handleRouteChange('Achievements')">achievements</button>
      </router-link>
      <router-link to="/about-me">
        <button @click="handleRouteChange('AboutMe')">about me</button>
      </router-link>
    </div>
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
      opacityTiming: 1.1,
      menuToggled: false,
    };
  },
  computed: {
    transition() {
      return (
        "opacity " + this.opacityTiming + "s cubic-bezier(.86,-0.03,.75,.05)"
      );
    },
  },
  methods: {
    dissolveGrid() {
      this.$refs.grid.dissolveGrid();
      this.routerShown = true;
    },
    revealGrid() {
      this.$refs.grid.revealGrid();
      this.routerShown = false;
    },
    transitionGrid() {
      this.$refs.grid.transitionGrid();
    },
    getRouterPointerEvents() {
      if (this.routerShown) {
        return "auto";
      } else {
        return "none";
      }
    },
    handleRouteChange(newRoute) {
      const currentRoute = this.$route.name;
      if (newRoute == currentRoute) {
        return;
      }
      if (currentRoute == "Home") {
        this.shortTransition = true;
        this.dissolveGrid();
        this.shortTransition = false;
      } else if (newRoute == "Home") {
        this.revealGrid();
        return;
      } else {
        this.transitionGrid();
      }
      this.menuToggled = false;
    },
    setOpacityTiming(value) {
      this.opacityTiming = value;
    },
    toggleMenu() {
      this.menuToggled = !this.menuToggled;
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
html,
body {
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
  z-index: 100;
}
nav.mobile {
  display: none;
}
ion-icon {
  color: white;
  font-size: 3rem;
  pointer-events: auto;
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
.invisible {
  visibility: hidden;
}
@media (max-width: 650px) {
  nav.desktop {
    display: none;
  }
  nav.mobile {
    display: block;
  }
  nav.mobile .links {
    width: 150px;
    display: flex;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.8);
    padding: 0.5rem;
    border-radius: 5px;
  }
}
</style>
