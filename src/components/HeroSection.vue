<template>
  <div id="tiles">
    <div
      class="tile"
      v-for="id in rows * columns"
      :key="id"
      @click="handleClick(id)"
    ></div>
  </div>
  <div class="introduction">
    <h1 class="name">sophia sharif</h1>
    <h2 class="subtitle">computer science student at ucla</h2>
    <p class="note">click a tile!</p>
  </div>
 
</template>

<script>
import { ref } from "@vue/reactivity";
import anime from "animejs/lib/anime.es.js";
import { onMounted } from "@vue/runtime-core";

export default {
  setup() {
    // set up grid
    const tileWidth = 70;
    let columns = ref(14),
      rows = ref(10);

    // get grid once mounted
    function calculateGrid() {
      columns.value = Math.floor(document.body.clientWidth / tileWidth);
      rows.value = Math.floor(document.body.clientHeight / tileWidth);
    }
    onMounted(() => calculateGrid());

    // adjust for window resizes
    let currentColor = "#191919";
    window.onresize = () => {
      calculateGrid();
      document
        .querySelectorAll(".tile") // set all new tiles to the same color
        .forEach((tile) => (tile.style.backgroundColor = currentColor));
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
      ];
      const chosenColor = colors[colorCount % colors.length];
      currentColor = chosenColor; // update color of the screen so resizing is not awk
      return chosenColor;
    }

    // color boxes on click
    function handleClick(index) {
      anime({
        targets: ".tile",
        backgroundColor: getColor(),
        delay: anime.stagger(50, {
          grid: [columns.value, rows.value],
          from: index,
        }),
      });
    }

    return { rows, columns, handleClick };
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

  /* gradient background */
  background: linear-gradient(to right, red, blue, red);
  background-size: 200%;
  animation: background-pan 5s ease infinite;
}

/* gradient animation */
@keyframes background-pan {
  from {
    background-position: 0% center;
  }
  to {
    background-position: -200% center;
  }
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
  pointer-events: none;
  width: 50vw;

  /* positioning */
  position: absolute;
  left: 35%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
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
</style>
