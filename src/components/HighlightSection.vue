<template>
  <section>
    <h2>Highlights</h2>
    <ClassShowcase />
  </section>
</template>

<script>
import ClassShowcase from "./ClassShowcase.vue";
export default {
  components: { ClassShowcase },
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
