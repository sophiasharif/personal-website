<template>
  <div class="achievement-deck">
    <AchievementCard
      class="card"
      v-for="(a, i) in achievements"
      :date="a.date"
      :title="a.title"
      :content="a.content"
      :index="i"
      :degSpan="16"
      :xSpan="40"
      :nCards="achievements.length"
      :key="a"
    />
  </div>
  <div class="buttons">
    <div class="backward button" @click="handleBackward">backward</div>
    <div class="forward button" @click="handleForward">forward</div>
  </div>
</template>

<script>
import AchievementCard from "./AchievementCard.vue";

export default {
  components: {
    AchievementCard,
  },
  data() {
    return {
      animationDegSpan: 48,
      animationXSpan: 150,
      animationYSpan: 12,
      achievements: [
        {
          date: "January 2021",
          title: "American Mathematics Competition,  1st Place",
          content:
            "I got the highest score on this math competition out of the 1000+ juniors and seniors at my high school.",
        },
        {
          date: "March 2022",
          title: "National Merit Scholarship Winner",
          content:
            "I earned a top 1% PSAT/SAT score to become a finalist (SAT score of 1580). I was the only one of the 17 finalists in high school to additionally earn the $2500 award from the National Merit Scholarship Corporation.",
        },
        {
          date: "June 2022",
          title: "Mathematics Department Award",
          content:
            "Faculty Departmental Awards recognize the top student in each academic discipline out of a class of 570 students.  I was awarded the award for Mathematics.",
        },
        {
          date: "March 2019 - March 2020",
          title: "USA Beach Volleyball National Team",
          content:
            "I was one of 24 selected for the 2019 USA national high-performance team. I was also the #1 beach volleyball player in Northern California for 2 years.",
        },
        // {
        //   date: "March 2022",
        //   title: "UCLA Regents Scholarship Nominee",
        //   content:
        //     "I was one of 220 out of 150,000 applicants invited to compete for UCLA’s Regents scholarship.",
        // },
      ],
    };
  },
  methods: {
    handleForward() {
      console.log("you go forward");
      this.achievements.unshift(this.achievements.pop());
      console.log(this.achievements);
    },
    handleBackward() {
      // this.achievements.shift(this.achievements.)
      console.log("you go backward");
    },
    getTranslationX(i) {
        const stagger = this.animationXSpan /(this.achievements.length-1);
        const res = -this.animationXSpan/2+stagger*(i-1)
        return res+'%'
    },
    getTranslationY(i) {
        const stagger = this.animationYSpan*2 /(this.achievements.length-1);
        const res = Math.abs(this.animationYSpan-stagger*(i-1))
        return res+'%'
    },
    getRotation(i) {
        const stagger = this.animationDegSpan / (this.achievements.length - 1);
        const res = -this.animationDegSpan/2 + stagger*(i-1);
        return res + 'deg'
    }
  },
};
</script>

<style scoped>
.buttons {
  display: flex;
  justify-content: center;
}
.button {
  height: 30px;
  width: 100px;
  background-color: lightsalmon;
  margin: 20px;
}
/* spread on hover */
.achievement-deck:hover > .card:nth-child(1) {
  transform: translate(v-bind(getTranslationX(1)), v-bind(getTranslationY(1))) rotate(v-bind(getRotation(1)));
  transition: transform 800ms cubic-bezier(0.05, 0.43, 0.25, 0.95);
}
.achievement-deck:hover > .card:nth-child(2) {
  transform: translate(v-bind(getTranslationX(2)), v-bind(getTranslationY(2))) rotate(v-bind(getRotation(2)));
  transition: transform 800ms cubic-bezier(0.05, 0.43, 0.25, 0.95);
}
.achievement-deck:hover > .card:nth-child(3) {
  transform: translate(v-bind(getTranslationX(3)), v-bind(getTranslationY(3))) rotate(v-bind(getRotation(3)));
  transition: transform 800ms cubic-bezier(0.05, 0.43, 0.25, 0.95);
}
.achievement-deck:hover > .card:nth-child(4) {
  transform: translate(v-bind(getTranslationX(4)), v-bind(getTranslationY(4))) rotate(v-bind(getRotation(4)));
  transition: transform 800ms cubic-bezier(0.05, 0.43, 0.25, 0.95);
}
.achievement-deck:hover > .card:nth-child(5) {
  transform: translate(v-bind(getTranslationX(5)), v-bind(getTranslationY(5))) rotate(v-bind(getRotation(5)));
  transition: transform 800ms cubic-bezier(0.05, 0.43, 0.25, 0.95);
}
/* center card deck */
.achievement-deck {
  display: grid;
  place-items: center;
  height: 400px;
}
</style>
