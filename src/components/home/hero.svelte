<section id="hero">
  <div class="container">
    <div class="main">
      <img class="logo" src="/images/elysium-logo.svg" alt="Elsyium logo">
      <h1>ELYSIU<span class='no-letter-spacing'>M</span></h1>
      <h2>IEEE-IIITD's TechWeek</h2>
    </div>
  </div>
</section>

<style lang="scss">
  @import "../../styles/common.scss";

  section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .container {
      max-width: 1000px;
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .main {
        text-align: center;

        img.logo {
          max-width: 400px;
          filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.6));
        }

        h1 {
          letter-spacing: 20px;
          font-size: 2rem;
          font-weight: 100;
          margin: 40px 0 20px 0;
        }

        h2 {
          font-size: 1rem;
          letter-spacing: 5px;
          font-weight: 100;
        }
      }
    }
  }
</style>
