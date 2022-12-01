<template>
  <div class="class-card">
    <h4>{{ className }}</h4>
  </div>
</template>

<script>
export default {
    props: {
        className: String,
        scale: {
            type: Number,
            required: false,
            default: 1
        }
    }
}
</script>

<style scoped>
.class-card {
    background: #191919;
    flex-grow: v-bind(scale);
    padding: 19px;

    /* center text */
    display: flex;
    justify-content: center;
    align-items: center;
}
.class-card:hover {
    background: rgba(255, 255, 255, 0.16);
    transition-duration: .75s;
}
h4 {
    text-align: center;
    margin: 0;
}
</style>