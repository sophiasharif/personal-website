<template>
  <div id="tiles">
    <div
      class="tile"
      v-for="id in rows * columns"
      :key="id"
      @click="colorGrid(id)"
    ></div>
  </div>
  <div class="introduction" :class="{ invisible: routerShown }">
    <h1 class="name">sophia sharif</h1>
    <h2 class="subtitle">computer science student at ucla</h2>
    <p class="note">click a tile!</p>
    <div class="links">
      <a href="https://www.linkedin.com/in/sophia-sharif/" target="_blank"
        ><ion-icon name="logo-linkedin"></ion-icon
      ></a>
      <a href="https://github.com/sophiasharif" target="_blank">
        <ion-icon name="logo-github"></ion-icon
      ></a>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import anime from "animejs/lib/anime.es.js";
import { onMounted } from "@vue/runtime-core";

export default {
  props: ["routerShown"],
  setup(props, { emit }) {
    // set up grid
    const tileWidth = 60;
    const stagger = 50;
    let columns = ref(0),
      rows = ref(0);

    // get grid once mounted
    function calculateGrid() {
      columns.value = Math.floor(window.innerWidth / tileWidth);
      rows.value = Math.floor(window.innerHeight / tileWidth);
    }

    // calculate opacity timing
    function calculateOpacityTiming() {
      const width = window.innerWidth;
      let opacityTiming = 1.3;
      if (width < 100) {
        opacityTiming = 1.1;
      }
      if (width < 1000) {
        opacityTiming = 0.9;
      }
      emit("setOpacityTiming", opacityTiming);
    }

    onMounted(() => {
      calculateGrid();
      calculateOpacityTiming();
    });

    // adjust for window resizes
    let currentColor = "#191919";
    window.onresize = () => {
      calculateGrid();
      calculateOpacityTiming();
      document
        .querySelectorAll(".tile") // set all new tiles to the same color
        .forEach((tile) => {
          tile.style.backgroundColor = currentColor;
          if (props.routerShown) {
            tile.style.opacity = 0;
          }
        });
    };

    // color generator
    let colorCount = 0;
    function getColor() {
      colorCount++;
      const colors = [
        "#34568B",
        "#FF6F61",
        "#6B5B95",
        "#3F0071",
        "#150050",
        "#4C0033",
        "#191919",
      ];
      const chosenColor = colors[colorCount % colors.length];
      currentColor = chosenColor; // update color of the screen so resizing is not awk
      return chosenColor;
    }

    // color boxes on click
    function colorGrid(index) {
      anime({
        targets: ".tile",
        backgroundColor: getColor(),
        delay: anime.stagger(stagger, {
          grid: [columns.value, rows.value],
          from: index - 1,
        }),
      });
    }

    function getIndex() {
      const row = Math.floor(rows.value / 2);
      const col = Math.floor(columns.value / 2);
      return columns.value * row + col;
    }

    function dissolveGrid() {
      anime({
        targets: ".tile",
        opacity: 0,
        delay: anime.stagger(stagger, {
          grid: [columns.value, rows.value],
          from: getIndex(),
        }),
      });
    }

    function revealGrid() {
      anime({
        targets: ".tile",
        opacity: 1,
        delay: anime.stagger(stagger, {
          grid: [columns.value, rows.value],
          from: getIndex(),
        }),
      });
    }

    function transitionGrid() {
      document
        .querySelectorAll(".tile") // set all new tiles to the same color
        .forEach((tile) => {
          tile.style.backgroundColor = "#191919";
        });
      let timeline = anime.timeline();
      timeline.add({
        targets: ".tile",
        opacity: 1,
        delay: anime.stagger(stagger, {
          grid: [columns.value, rows.value],
          from: getIndex(),
        }),
      });
      timeline.add(
        {
          targets: ".tile",
          opacity: 0,
          delay: anime.stagger(stagger, {
            grid: [columns.value, rows.value],
            from: getIndex(),
          }),
        },
        "-=870"
      );
      timeline.play();
    }

    function getGridPointerEvents() {
      if (props.routerShown) {
        return "none";
      } else {
        return "auto";
      }
    }

    return {
      rows,
      columns,
      colorGrid,
      dissolveGrid,
      revealGrid,
      transitionGrid,
      getGridPointerEvents,
    };
  },
};
</script>

<style scoped>
#tiles {
  height: calc(100vh - 1px);
  width: calc(100vw - 1px);
  display: grid;
  grid-template-columns: repeat(v-bind(columns), 1fr);
  grid-template-rows: repeat(v-bind(rows), 1fr);
  pointer-events: v-bind(getGridPointerEvents());
  position: absolute;
  top: 0;
  right: 0;
}
.tile {
  box-sizing: border-box;
  background-color: #191919;
  margin: 0.5px;
}
.tile:before {
  content: "";
  color: black;
}
.introduction {
  color: white;
  margin: 0px;
  width: 50vw;
  opacity: 1;
  transition: opacity 1.3s ease;
  

  /* positioning */
  position: absolute;
  left: 35%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

.invisible {
  opacity: 0;
  
}

h1.name {
  color: white;
  font-size: 70px;
}

h2.subtitle {
  font-size: 25px;
  font-weight: 400;
  color: white;
}

p.note {
  color: white;
  font-size: 20px;
}

.links {
  display: flex;
  justify-content: space-between;
  min-width: 90px;
  width: 10%;
  max-width: 150px;
  margin-top: 15%;
}

ion-icon {
  font-size: 2rem;
}

.tiles::after {
  background-image: url("../assets/profile-pic.jpg");
}
</style>
