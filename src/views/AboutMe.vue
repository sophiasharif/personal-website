<template>
  <div class="container">
    <div class="about-me">
      <div class="text">
        <h1>👋<br /><strong>Hello, I’m Sophia!</strong></h1>
        <div class="quick-facts">
          <p>Here's a bit about me:</p>
          <ol>
            <li>I'm half Russian and half Iranian.</li>
            <ul>
              <li>I lived in Moscow for 3 years.</li>
            </ul>
            <li>I used to be a competitive beach volleyball player.</li>
            <ul>
              <li>I was on the national team in 2019.</li>
              <li>I was ranked #1 in Northern California.</li>
            </ul>
            <li>I earned a world record in Google Snake.</li>
            <li>
              I help organize LA Hacks, the largest & oldest student-run
              hackathon in SoCal.
            </li>
            <li>
              I'm currently a learning assistant for Math 32AH (honors
              multivariable calculus)!
            </li>
          </ol>
          <div class="links">
            <a href="https://www.linkedin.com/in/sophia-sharif/" target="_blank"
              ><ion-icon name="logo-linkedin"></ion-icon
            ></a>
            <a href="https://github.com/sophiasharif" target="_blank">
              <ion-icon name="logo-github"></ion-icon
            ></a>
          </div>
        </div>
      </div>
    </div>
    <div class="profile-pic">
      <img src="../assets/profile-pic.jpg" alt="Sophia Sharif" />
    </div>
  </div>
</template>

<style scoped>
.container {
  background: rgba(0, 0, 0, 0.7);
  border-radius: 1rem;
  padding: 1rem;
  margin: 0 1rem;
}
.about-me {
  display: flex;
  justify-content: center;
  align-items: center;
}
.text {
  text-align: left;
  display: inline-block;
  max-width: 480px;
}
h1 {
  font-size: 1.25rem;
  margin-top: 0;
}
.quick-facts {
  font-size: 0.8rem;
}
.profile-pic {
  display: flex;
  margin: 1rem;
  justify-content: center;
  align-items: center;
}

img {
  display: none;
}

.links {
  display: flex;
  justify-content: center;
}

ion-icon {
  font-size: 2rem;
  margin: 0 1rem;
}

@media (min-width: 400px) {
  h1 {
    font-size: 1.75rem;
  }
  .quick-facts {
    font-size: 1rem;
  }
}

@media (min-width: 550px) {
  h1 {
    font-size: 2.5rem;
  }
  .quick-facts {
    font-size: 1.15rem;
  }
}

@media (min-width: 1000px) {
  h1 {
    font-size: 2rem;
  }
  .quick-facts {
    font-size: 1rem;
  }
  img {
    display: block;
    border-radius: 8%;
    width: 100%;
    max-width: 480px;
    margin: auto;
  }
  .about-me,
  .profile-pic {
    flex: 1;
    margin: 1rem;
  }
  .container {
    display: flex;
    align-content: center;
    justify-content: center;
    min-height: 40vh;
    max-width: 1440px;
    padding: 1rem 2rem;
  }
}

@media (min-width: 1100px) {
  h1 {
    font-size: 2.25rem;
  }
  .quick-facts {
    font-size: 1.15rem;
  }
}
</style>
