<template>
  <HighlightCard>
    <h3>Coursework</h3>
    <div class="grid">
      <header class="math-coursework">Math Courses</header>
      <header class="cs-courseword">CS Courses</header>
    </div>
    <div class="grid gradient-background">
      <div class="col">
        <ClassCard className="Discrete Structures" />
        <ClassCard className="Differential Equations" />
        <ClassCard className="Probability and Combinatorics" />
        <ClassCard className="Integration and Infinite Series" />
      </div>
      <div class="col">
        <ClassCard
          className="Differential Multivariable Calculus (Honors)"
          :scale="2"
        />
        <ClassCard className="Integral Multivariable Calculus (Honors)" :scale="3"/>
         <ClassCard className="Number Theory" :scale="3" />
        <ClassCard className="Differential and Integral Calculus" />
      </div>
      <div class="col">
        <ClassCard className="Data Structures and Algorithms" />
        <ClassCard className="Computer Organization" />
        <ClassCard className="Software Construction Lab" />
        <ClassCard className="Algorithms and Complexity" />
      </div>
    </div>
  </HighlightCard>
</template>

<script>
import ClassCard from "./ClassCard.vue";
import HighlightCard from "./HighlightCard.vue";
export default {
  components: { ClassCard, HighlightCard },
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3px;
  padding: 3px;
  width: 800px;
}
.gradient-background {
  background: linear-gradient(to right, red, blue, red);
  background-size: 200%;
  animation: background-pan 5s ease infinite;
}
header {
  background: #f18805;
  margin: 0 1rem;
  padding: 7px;
  margin-bottom: 20px;
  border-radius: 10px;
  font-weight: 800;
  font-size: 20x;
  display: flex;
  justify-content: center;
}
header.math-coursework {
  grid-column-start: 1;
  grid-column-end: 3;
}
header.cs-coursework {
  grid-column: span(1);
}
.col {
  display: flex;
  flex-direction: column;
  gap: 3px;
  height: 400px;
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
</style>
