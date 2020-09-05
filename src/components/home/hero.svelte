<script>
  import { onMount } from 'svelte'
  import Logo from './logo.svelte'

  let loaded = false

  onMount(async () => {
    await new Promise(res => setTimeout(res, 500))
    loaded = true
  })
</script>

<section id="hero">
  <div class="container">
    <div class="main" class:loaded>
      <Logo />
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

        h1 {
          letter-spacing: 20px;
          font-size: 2rem;
          font-weight: 100;
          margin: 40px 0 20px 0;

          &::after {
            content: '';
            height: 1px;
            width: 0%;
            background: #00ffc759;
            display: block;
            margin-top: 20px;
            transition: 0.5s all ease-in;
            box-shadow: 0 0 25px 1px #00ffc759;
          }
        }

        h2 {
          font-size: 1rem;
          letter-spacing: 5px;
          font-weight: 100;
        }

        &.loaded {
          h1::after {
            width: 100%;
          }
        }
      }
    }
  }
</style>
