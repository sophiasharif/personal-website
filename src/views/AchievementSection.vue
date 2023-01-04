<template>
  <div class="wrapper">
    <header>
      <h2 v-if="mqHeight.matches">Achievements</h2>
      <div class="description">
        <h3 v-if="!mqTablet.matches">
          Hover over the deck to preview or click the arrows to navigate!
        </h3>
        <h3 v-else>
          Tap the cards to navigate!
        </h3>
      </div>
    </header>
    <div class="achievement-deck">
      <AchievementCard
        class="card"
        v-for="(a, i) in achievements"
        :date="a.date"
        :title="a.title"
        :content="a.content"
        :index="i"
        :degSpanMobile="8"
        :xSpanMobile="8"
        :degSpanTablet="16"
        :xSpanTablet="30"
        :degSpanDesktop="16"
        :xSpanDesktop="80"
        :nCards="achievements.length"
        :key="a"
        @click="handleClick"
      />
    </div>
    <div class="buttons" v-if="!mqTablet.matches">
      <ion-icon name="arrow-back-circle-outline" @click="handleBackward"></ion-icon>
      <ion-icon
        name="arrow-forward-circle-outline"
        @click="handleForward"
      ></ion-icon>
    </div>
  </div>
</template>

<script>
import AchievementCard from "../components/AchievementCard.vue";
import transX from "../composables/getTranslationX"
import transY from "../composables/getTranslationY"
import rot from "../composables/getRotation"

export default {
  components: {
    AchievementCard,
  },
  computed: {
    mqMobile() {
      return window.matchMedia("(max-width: 480px)");
    },
    mqTablet() {
      return window.matchMedia("(max-width: 770px)");
    },
    mqHeight() {
      return window.matchMedia("(min-height: 800px)");
    }
  },
  data() {
    return {
      animationDegSpan: 40,
      animationXSpan: 200,
      animationYSpan: 12,
      achievements: [
        {
          date: "March 2022",
          title: "National Merit Scholarship Winner",
          content:
            "I earned a top 1% PSAT/SAT score to become a finalist (SAT score of 1580). I was the only one of the 17 finalists in high school to additionally earn the $2500 award.",
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
        {
          date: "December 2018 - March 2020",
          title: "#1 Beach Volleyball Player in Northern California",
          content:
            "I was ranked the #1 player in Northern California for more than a year. I was also ranked top 3 in California and top 20 nationally.",
        },
        {
          date: "March 2022",
          title: "UCLA Regents Scholarship Nominee",
          content:
            "I was one of 220 out of 150,000 applicants invited to compete for UCLA’s Regents scholarship.",
        },
        {
          date: "January 2021",
          title: "American Mathematics Competition,  1st Place",
          content:
            "I got the highest score on this math competition out of the 1000+ juniors and seniors at my high school.",
        },
      ],
    };
  },
  methods: {
    handleForward() {
      this.achievements.unshift(this.achievements.pop());
      console.log(this.achievements);
    },
    handleBackward() {
      const temp = this.achievements.shift()
      console.log(this.achievements)
      this.achievements.push(temp)
      // this.achievements.append(temp)
    },
    handleClick() {
      if (this.mqTablet.matches) {
        this.handleForward();
      }
    },
    getTranslationX(i) {
      return transX(this.animationXSpan, this.achievements.length, i-1) 
    },
    getTranslationY(i) {
      return transY(this.animationYSpan, this.achievements.length, i-1)
    },
    getRotation(i) {
      return rot(this.animationDegSpan, this.achievements.length, i-1)
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.buttons {
  display: flex;
  justify-content: center;
  gap: 2rem;
}
ion-icon {
  font-size: 64px;
}
header {
  display: flex;
  flex-direction: column;
  align-items: center;
}
header h2 {
  font-size: 2rem;
  line-height: 0;
}
header .description {
  max-width: 850px;
  text-align: center;
}
header .description h3 {
  font-weight: 400;
  margin-bottom: 0;
  margin-top: 1rem;
}
/* center card deck */
.achievement-deck {
  display: grid;
  place-items: center;
  height: 450px;
}
/* spread on hover -- only for larger screens  */
@media (min-width: 770px) {
  .achievement-deck:hover > .card:nth-child(1) {
    transform: translate(v-bind(getTranslationX(1)), v-bind(getTranslationY(1)))
      rotate(v-bind(getRotation(1)));
    transition: transform 800ms cubic-bezier(0.05, 0.43, 0.25, 0.95);
  }
  .achievement-deck:hover > .card:nth-child(2) {
    transform: translate(v-bind(getTranslationX(2)), v-bind(getTranslationY(2)))
      rotate(v-bind(getRotation(2)));
    transition: transform 800ms cubic-bezier(0.05, 0.43, 0.25, 0.95);
  }
  .achievement-deck:hover > .card:nth-child(3) {
    transform: translate(v-bind(getTranslationX(3)), v-bind(getTranslationY(3)))
      rotate(v-bind(getRotation(3)));
    transition: transform 800ms cubic-bezier(0.05, 0.43, 0.25, 0.95);
  }
  .achievement-deck:hover > .card:nth-child(4) {
    transform: translate(v-bind(getTranslationX(4)), v-bind(getTranslationY(4)))
      rotate(v-bind(getRotation(4)));
    transition: transform 800ms cubic-bezier(0.05, 0.43, 0.25, 0.95);
  }
  .achievement-deck:hover > .card:nth-child(5) {
    transform: translate(v-bind(getTranslationX(5)), v-bind(getTranslationY(5)))
      rotate(v-bind(getRotation(5)));
    transition: transform 800ms cubic-bezier(0.05, 0.43, 0.25, 0.95);
  }
  .achievement-deck:hover > .card:nth-child(6) {
    transform: translate(v-bind(getTranslationX(6)), v-bind(getTranslationY(6)))
      rotate(v-bind(getRotation(6)));
    transition: transform 800ms cubic-bezier(0.05, 0.43, 0.25, 0.95);
  }
}

</style>
