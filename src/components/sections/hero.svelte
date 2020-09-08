<script>
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import { validate } from 'email-validator'
  import Logo from '../logo.svelte'

  let loaded = false
  let buttonText = 'Sign up!'
  let emailSubmitted = false
  let email = ''

  const wait = async ms => new Promise((resolve, reject) => setTimeout(resolve, ms))

  async function submitEmail (event) {
    event.preventDefault()
    if (!validate(email)) {
      buttonText = 'Error!'
      await wait(1000)
    }

    buttonText = 'Signing up...'
    const res = await fetch('https://elysium-emails.vercel.app/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    })
    const json = await res.json()

    if (json.success) {
      localStorage.setItem('emailSubmitted', true)
      buttonText = 'Done!'
      await wait(1000)
      emailSubmitted = true
      return
    }

    buttonText = 'Error!'
    await wait(1000)
    buttonText = 'Sign up!'
  }

  onMount(async () => {
    emailSubmitted = Boolean(JSON.parse(localStorage.getItem('emailSubmitted')))
    loaded = true
  })
</script>

<section id="hero">
  <div class="container">
    <div class="main" class:loaded>
      <Logo />
      <h1>ELYSIU<span class='no-letter-spacing'>M</span></h1>
      <h2>IEEE-IIITD's TechWeek</h2>
      <h3>
        <time datetime="2020-10-25">25<sup>th</sup> Oct</time>
        &mdash;
        <time datetime="2020-10-31">31<sup>st</sup> Oct</time>
      </h3>
    </div>

    <form on:submit={submitEmail}>
      <label for="updated-email-input">{
        emailSubmitted
          ? 'Thanks for signing up! You will now receive updates :)'
          : 'Sign up for updates!'
      }</label>
      {#if !emailSubmitted}
        <div class='input-wrapper' transition:fade={{ duration: 200 }}>
          <input bind:value={email} type="email" id="updated-email-input" placeholder="Email ID" required>
          <button>{buttonText}</button>
        </div>
      {/if}
    </form>
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
      margin-top: calc(10vh + 40px);

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

        h3 {
          font-weight: 100;
          margin-top: 5vh;
          font-size: 1.2rem;
          letter-spacing: 2px;
        }

        &.loaded {
          h1::after {
            width: 100%;
          }
        }
      }

      form {
        margin-top: 10vh;
        display: flex;
        flex-direction: column;
        width: 350px;
        max-width: 100%;

        &, * {
        transition: 0.1s border-color ease-in-out,
                    0.1s background-color ease-in-out,
                    0.1s color ease-in-out,
                    0.1s box-shadow ease-in-out;
        }

        label {
          display: block;
          font-size: 1rem;
          text-align: center;
          font-weight: 100;
          line-height: 1.7;
        }

        input {
          background: #040b18;
          padding: 10px;
          border-radius: 5px 0 0 5px;
          border: none;
          font-family: Inter;
          font-size: 0.9rem;
          outline: none;
          color: #788295;
          flex: 1;
          border: 2px solid #040b18;
          letter-spacing: 0.5px;

          &:active,
          &:focus {
            border-color: #0d2044;
          }
        }

        button {
          font-size: 0.9rem;
          padding: 5px 10px;
          border: none;
          background: #0d2044;
          color: #788295;
          border-radius: 0 5px 5px 0;
          cursor: pointer;
          outline: none;

          &:active,
          &:hover,
          &:focus {
            color: #eee;
          }
        }

        .input-wrapper {
          display: flex;
          justify-content: center;
          margin-top: 20px;

          &:hover {
            box-shadow: 0 5px 10px rgba(0,0,0,.2);
          }
        }
      }
    }
  }
</style>
