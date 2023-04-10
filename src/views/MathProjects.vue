<template>
  <div class="wrapper">
    <header>
      <h2>Math Papers</h2>
      <div class="description" >
        <h3 v-if="!mqTablet.matches">
          These are some papers I've written for my math courses. Hover over the cards to see more information and get a link to the paper!
        </h3>
        <h3 v-else>Tap the cards to navigate!</h3>
      </div>
    </header>
    <div class="card-list">
      <MathProjectCard
        class="card"
        v-for="(project, index) in projects"
        :key="project.title"
        :date="project.date"
        :title="project.title"
        :description="project.description"
        :demoLink="project.demoLink"
        :index="index"
        :nCards="projects.length"
        :clicked="clicked"
        @click="handleClick"
      />
    </div>
  </div>
</template>

<script>
import MathProjectCard from "../components/MathProjectCard.vue";

export default {
  components: { MathProjectCard },
  computed: {
    mqMobile() {
      return window.matchMedia("(max-width: 480px)");
    },
    mqTablet() {
      return window.matchMedia("(max-width: 770px)");
    },
  },
  data() {
    return {
      clicked: false,
      projects: [
        {
          date: "October 9, 2022",
          title: "Linear Maps, Eigenvectors, and Eigenvalues",
          description:
            "This report explores the geometry of 2D linear maps and how to interpret their eigenvectors and eigenvalues.",
          demoLink: "https://github.com/sophiasharif/honors-multivariable-calculus/blob/main/Report1.pdf",
        },
        {
          date: "November 11, 2022",
          title: "Polar Limits, ε-δ Definition of Limits",
          description:
            "An investigation of how polar coords can calculate limits, including an ε-δ proof of the polar method and an case study of when polar limits fail.",
          demoLink: "https://github.com/sophiasharif/honors-multivariable-calculus/blob/main/Report2.pdf",
        },
        {
          date: "November 22, 2022",
          title: "Curvature and the Frenet Frame",
          description: "This report studies the calculus of vector-valued functions, the Frenet Frame and its properties, and different formulas for curvature.",
          demoLink: "https://github.com/sophiasharif/honors-multivariable-calculus/blob/main/Report3.pdf"
        },
        {
          date: "December 6, 2022",
          title: " Multipliers and Tolerance Intervals",
          description:
            "This report uses LaGrange multipliers to solve a real-world problem by optimizing the dimensions of a can.",
          demoLink: "https://github.com/sophiasharif/honors-multivariable-calculus/blob/main/Report4.pdf",
        },
        {
          date: "January 20, 2023",
          title: "Improper Integrals & The Cauchy Principal Value",
          description:
            "This report explores how to calculate improper integrals with unbounded functions, unbounded support, or both.",
          demoLink: "https://github.com/sophiasharif/honors-multivariable-calculus/blob/main/Report5.pdf",
        },
        {
          date: "Febuary 21, 2023",
          title: "Identifying & Describing Manifolds",
          description:
            "This report studies how to identify k-dimensional manifolds and how the implicit function theorem generalizes the notion of manifolds.",
          demoLink: "https://github.com/sophiasharif/honors-multivariable-calculus/blob/main/Report6.pdf",
        },
      ],
    };
  },
  methods: {
    handleClick() {
      if (this.mqTablet.matches) {
        this.projects.unshift(this.projects.pop());
      }
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  width: 95%;
  max-width: 900px;
  margin: 2rem;
  gap: 2rem;
}
header {
  display: flex;
  flex-direction: column;
  align-items: center;
}
header h2 {
  font-size: 2rem;
  margin-top: 0;
}
header h3 {
  margin: 0;
}
header .description {
  width: 100%;
  max-width: 750px;
  margin: 0 1rem;
  text-align: center;
}
header .description h3 {
  font-weight: 400;
}
.card-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  gap: 15px;
}
@media (max-width: 770px) {
  .card-list {
    grid-template-columns: 100%;
    height: 300px;
    margin-top: 2rem;
    position: relative;
    margin-bottom: 50px;
  }
  .wrapper {
    align-items: center;
  }
}
</style>
