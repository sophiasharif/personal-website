<template>
  <div id="tiles">
    <!-- <div
      class="tile"
      v-for="id in rows * columns"
      :key="id"
      @click="handleClick(id)"
    ></div> -->
  </div>
  <div class="introduction">
    <h1 class="name">sophia sharif</h1>
    <h2 class="subtitle">computer science student at ucla</h2>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import anime from "animejs/lib/anime.es.js";
import { onMounted } from "@vue/runtime-core";

export default {
  setup() {
    // set up grid
    const tileWidth = 50;
    let columns = ref(0);
    let rows = ref(0);

    // adjust for window resizes
    function calculateGrid() {
      columns.value = Math.floor(document.body.clientWidth / tileWidth);
      rows.value = Math.floor(document.body.clientHeight / tileWidth);
    }

    // color generator
    let colorCount = 0;
    function getColor() {
      colorCount++;
      const colors = ["#34568B", "#FF6F61", "#6B5B95", "#88B04B"];
      // const colors = ["#3F0071", "#150050", "#4C0033", "#4C3A51"];
      return colors[colorCount % colors.length];
    }

    function handleClick(index) {
      console.log(index, "updating color count to ", colorCount);

      anime({
        targets: ".tile",
        backgroundColor: getColor(),
        delay: anime.stagger(50, {
          grid: [rows.value, columns.value],
          from: index,
        }),
      });
    }

    function createTile(index) {
      let tile = document.createElement("div");
      tile.classList.add("tile");
      tile.onclick = () => handleClick(index);
      return tile;
    }

    function createGrid(numTiles) {
      let grid = document.getElementById("tiles");
      for (let i = 0; i < numTiles; i++) {
        grid.appendChild(createTile(i));
      }
    }

    function resetBoard() {
      document.getElementById("tiles").innerHTML = "";
    }

    window.onresize = () => {
      resetBoard();
      calculateGrid();
      createGrid(rows.value*columns.value)
    }

    

    onMounted(() => {
      calculateGrid();
      createGrid(rows.value * columns.value);
    });
    // window.onresize = recalculateGrid();

    

    // handle click on tile

    

    return { rows, columns, handleClick };
  },
};
</script>

<style>
#tiles {
  height: 100vh;
  width: 100wh;
  display: grid;
  grid-template-columns: repeat(v-bind(columns), 1fr);
  grid-template-rows: repeat(v-bind(rows), 1fr);

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

.tile {
  box-sizing: border-box;
  background-color: #191919;
  margin: 0.5px;
}

.tile:before {
  content: "";
  color: black;
}

h1.name {
  /* position: absolute;
  top: 20%; */
  left: 20%;
  color: white;
  font-size: 60px;
}

h2.subtitle {
  /* position: absolute;
  top: 60%; */
  left: 20%;
  font-size: 20px;
  color: white;
}
.introduction {
  /* height: 50px;
  width: 50px; */
  width: 50%;
  height: 20%;
  position: absolute;
  top: 20%;
  left: 15%;
}
</style>
