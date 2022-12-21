<template>
  <div class="card">
    <p>{{ date }}</p>
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  props: ["date", "title", "content", "index", "degSpan", "xSpan", "nCards"],
  computed: {
    rotation() {
      const start = (this.degSpan / 2) * -1;
      const stagger = this.degSpan / (this.nCards - 1);
      const res = stagger * this.index + start
      return res;
    },
    translation() {
        const stagger = this.xSpan * 2 /(this.nCards-1);
        const res = -this.xSpan+stagger*this.index
        return res
    },
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
  padding: 1.5rem;
  border-radius: 10px;

  position: absolute;
  transform: translate(v-bind(translation+'%')) rotate(v-bind(rotation+'deg'));
  transition: transform 200ms;
}
</style>
