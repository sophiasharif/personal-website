<template>
  <div class="card">
    <p>{{ date }}</p>
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
  </div>
</template>

<script>
import transX from '../composables/getTranslationX'
import rot from '../composables/getRotation'

export default {
  props: ["date", "title", "content", "index", "degSpanMobile", "xSpanMobile","degSpanTablet", "xSpanTablet", "degSpanDesktop", "xSpanDesktop", "nCards"],
  computed: {
    mqMobile() {
      return window.matchMedia('(max-width: 480px)')
    },
    mqTablet() {
      return window.matchMedia('(max-width: 770px)')
    },
    degSpan() {
      if (this.mqMobile.matches) {
        return this.degSpanMobile
      } else if (this.mqTablet.matches) {
        return this.degSpanTablet
      } else {
        return this.degSpanDesktop
      }
    },
    xSpan() {
      if (this.mqMobile.matches) {
        return this.xSpanMobile
      } else if (this.mqTablet.matches) {
        return this.xSpanTablet
      } else {
        return this.xSpanDesktop
      }
    },
    rotation() {
      return rot(this.degSpan, this.nCards, this.index)
    },
    translationX() {
      return transX(this.xSpan, this.nCards, this.index)
    }
  },
};
</script>

<style scoped>
.card {
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  background: #17141d;
  box-shadow: -.35rem 0 3rem #000;
  aspect-ratio: 5 / 7;
  width: 300px;
  padding: 25px;
  border-radius: 10px;

  position: absolute;
  transform: translate(v-bind(translationX)) rotate(v-bind(rotation));
  transition: transform 200ms;
}

@media (max-width: 770px) {
  .card {
    box-shadow: -.35rem 0 1.5rem #000
  }
}

@media (max-width: 480px) {
  .card {
    box-shadow: -.3rem .2rem #000
  }
}
</style>
