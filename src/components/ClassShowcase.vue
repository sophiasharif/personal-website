<template>
  <div class="grid">
    <HighlightCard class="math">
      <header class="math-coursework">Math Courses</header>
      <div class="math-grid gradient-background">
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
          <ClassCard
            className="Integral Multivariable Calculus (Honors)"
            :scale="3"
          />
          <ClassCard className="Number Theory" :scale="3" />
          <ClassCard className="Differential and Integral Calculus" />
        </div>
      </div>
    </HighlightCard>
    <HighlightCard class="cs">
      <header class="cs-coursework">CS Courses</header>
      <div class="cs-grid gradient-background">
        <div class="col">
        <ClassCard className="Data Structures and Algorithms" />
        <ClassCard className="Computer Organization" />
        <ClassCard className="Software Construction Lab" />
        <ClassCard className="Algorithms and Complexity" />
      </div>
      </div>
    </HighlightCard>
  </div>
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
  max-width: 900px;
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
.col {
  display: flex;
  flex-direction: column;
  gap: 1.5px;
  min-height: 430px;
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

/* math courses */
.math {
  grid-column-start: 1;
  grid-column-end: 3;
}
.math-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5px;
  padding: 1.5px;
}
/* cs courses */
.cs-grid {
  padding: 1.5px;
}
</style>
