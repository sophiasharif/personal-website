<template>
  <div class="card-container" :class="{ test: clicked }">
    <div class="card-inner">
      <div class="card-front">
        <p id="date">{{ date }}</p>
        <h2 id="title">{{ title }}</h2>
        <div v-if="mqTablet.matches">
          <p id="description">{{ description }}</p>
          <a id="link" :href="demoLink" v-if="demoLink" target="_blank"
            ><ion-icon name="link-outline"></ion-icon
          ></a>
        </div>
      </div>
      <div class="card-back">
        <p>{{ description }}</p>
        <a :href="demoLink" v-if="demoLink" target="_blank"
          ><ion-icon name="link-outline"></ion-icon
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
import transX from "../composables/getTranslationX";
import rot from "../composables/getRotation";

export default {
  props: [
    "date",
    "title",
    "description",
    "demoLink",
    "index",
    "nCards",
    "clicked",
  ],
  data() {
    return {
      degSpanMobile: 8,
      degSpanTablet: 16,
      xSpanMobile: 20,
      xSpanTablet: 30,
    };
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
.card-container {
  width: 100%;
  aspect-ratio: 4/3;
  background: transparent;
  text-align: center;
  perspective: 1000px;
}
.card-inner {
  border-radius: 16px;
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.card-front,
.card-back {
  border-radius: 16px;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  background-color: #17141d;
}
.card-front {
  display: grid;
  grid-template-rows: 1fr 3fr 1fr;
  place-items: center;
}
.card-back {
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: rotateY(180deg);
}
.card-front p,
.card-front h2 {
  margin: 0 1rem;
}
.card-back p {
  margin: 0 0.75rem;
}
@media (max-width: 970px) {
  h2 {
    font-size: 1.25rem;
  }
  p {
    font-size: 0.85rem;
  }
}
ion-icon {
  color: white;
  font-size: 2rem;
  margin: 0.5rem;
}
@media (min-width: 770px) {
  .card-container:hover .card-inner {
    transform: rotateY(180deg);
  }
}
@media (max-width: 770px) {
  .card {
    width: 260px;
    position: absolute;
    transform: translate(v-bind(translationX)) rotate(v-bind(rotation));
    transition: transform 200ms;
    /* box-shadow: -0.35rem 0 1.5rem #000; */
    filter: drop-shadow(-0.35rem 0 1.5rem rgba(0, 0, 0, 1));
  }
  .card-front {
    grid-template-rows: 1fr 1fr 6fr;
  }
  .card-front #date {
    font-size: .8rem;
    justify-self: start;
    align-self: flex-end;
    font-style: italic;
  }
  .card-front #title {
    font-size: 1.1rem;
    text-align: left;
  }
  .card-front #description {
    font-size: 1rem;
    text-align: left;
  }
}


@media (max-width: 400px) {
  .card {
    width: 225px;
    filter: drop-shadow(-0.3rem 0 0.2rem rgba(0, 0, 0, 1));
  }
  .card-front #date {
    font-size: 0.75rem;
  }
  .card-front #title {
    font-size: 1rem;
  }
  .card-front #description {
    font-size: 0.9rem;
  }
}
</style>
