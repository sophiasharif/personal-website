<template>
  <div class="container">
    <div class="about-me">
      <div class="wrapper">
        <div class="text">
          <h1>👋<br /><strong>Hello, I’m Sophia!</strong></h1>
          <div class="quick-facts">
            <p>Here's a bit about me:</p>
            <ol>
              <li>I grew up in the Bay Area.</li>
              <li>I'm half Russian and half Iranian.</li>
              <ul>
                <li>I lived in Moscow for 3 years.</li>
              </ul>
              <li>I used to be a competitive beach volleyball player.</li>
              <ul>
                <li>I was on the national team in 2019.</li>
                <li>I was ranked #1 in Northern California.</li>
              </ul>
              <li>I learned how to code in high school.</li>
              <li>I earned a world record in Google Snake.</li>
              <li>I'm now studying math & CS at UCLA.</li>
            </ol>
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
h1 {
  font-size: 2rem;
  margin-top: 0;
  color: white;
}

.container {
  padding: 2rem 3%;
}

.about-me {
  display: flex;
  margin: 1rem;
  justify-content: center;
  align-items: center;
}

.wrapper {
  display: block;
}

.text {
  text-align: left;
  display: inline-block;
}

.profile-pic {
  display: flex;
  margin: 1rem;
  justify-content: center;
  align-items: center;
}

img {
  display: block;
  border-radius: 8%;
  width: 100%;
  max-width: 500px;
  margin: auto;
}

@media (min-width: 375px) {
  h1 {
    font-size: 2.25rem;
  }
}

@media (min-width: 400px) {
  h1 {
    font-size: 2.5rem;
  }
}

@media (min-width: 550px) {
  h1 {
    font-size: 3rem;
  }
  .quick-facts {
    font-size: 1.15rem;
  }
}

@media (min-width: 1000px) {
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
    padding: 2rem 3%;
  }
  img {
    max-width: 600px;
  }
}
</style>
