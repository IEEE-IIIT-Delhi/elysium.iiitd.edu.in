<script>
  import { fade } from 'svelte/transition'
  import links from '../../data/links.yml'
  import { wait } from '../utils'

  import Logo from './logo.svelte'
  import Chevron from './icons/chevron.svelte'

  let showMenu = false

  async function linkClick (event, toggleMenu) {
    event.preventDefault()

    if (toggleMenu) {
      showMenu = false
    }

    const targetHash = new URL(event.target.href).hash
    const targetEl = document.querySelector(targetHash)
    const targetOffset = targetEl.getBoundingClientRect().y - 60

    window.scrollBy({
      top: targetOffset,
      behavior: 'smooth'
    })

    await wait(500)

    location.hash = targetHash
  }
</script>

<header>
  <nav class='hover-highlight'>
    <a href="/" class='header'>
      <Logo size={'30px'} moveLogo={false}/>
      <span>ELYSIUM</span>
    </a>

    <!-- Desktop view -->
    <ul class='main-list'>
      {#each links as link}
        <li>
          <a
            on:click={linkClick}
            href="{link.href}"
          >{link.name}</a>
        </li>
      {/each}
    </ul>

    <!-- Mobile view -->
    <button
      class="menu-btn"
      role="button"
      aria-label="Toggle menu"
      on:click={() => showMenu = !showMenu}
    >
      <Chevron strokeColor={'#4b6492'} open={showMenu}/>
    </button>

    {#if showMenu}
      <ul class='hidden-list' transition:fade={{ duration: 200 }}>
        {#each links as link}
          <li>
            <a
              on:click={event => linkClick(event, true)}
              href="{link.href}"
            >{link.name}</a>
          </li>
        {/each}
      </ul>
    {/if}
  </nav>
</header>

<style lang="scss">
  header {
    position: fixed;
    top: 0;
    z-index: 10;
    width: 100%;

    nav {
      margin: 20px auto 0;
      max-width: 1000px;
      border-radius: 10px;
      backdrop-filter: blur(8px);
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      border: 1px solid #09253c;
      box-shadow: 0 10px 20px rgba(0,0,0,0.12);
      overflow: hidden;
      background: #040b18b5;

      a.header {
        text-decoration: none;
        color: #fff;
        letter-spacing: 3px;
        font-weight: 100;
        display: flex;
        align-items: center;
        font-size: 1.25rem;
        padding: 15px;

        img {
          height: 30px;
        }

        span {
          margin-left: 20px;
        }
      }

      ul {
        display: flex;
        align-self: stretch;

        li {
          list-style-type: none;

          a {
            padding: 0 15px;
            text-decoration: none;
            color: #acc9ff;
            font-weight: 300;
            font-size: 0.9rem;
            text-transform: uppercase;
            height: 100%;
            display: flex;
            align-items: center;
            position: relative;
            font-weight: 400;
            outline: none;

            &::before {
              content: "";
              display: block;
              height: 100%;
              width: 0%;
              background: #1e5ed426;
              position: absolute;
              left: 0;
              bottom: 0px;
              transition: 0.1s all ease-out;
            }

            &:hover,
            &:focus {
              &::before {
                width: 100%;
              }
            }
          }
        }

        &.hidden-list {
          width: 100%;
          flex-direction: column;
          margin-top: 10px;
          display: none;

          li {
            padding: 10px;
            text-align: center;
            margin-bottom: 10px;
            background: #10213fad;
            margin: 0 15px 15px 15px;
            border-radius: 5px;

            a {
              display: block;
            }
          }
        }
      }

      button.menu-btn {
        display: none;
        border: 1px solid transparent;
        border-radius: 5px;
        margin-right: 15px;
        padding: 5px;
        background: none;
        height: fit-content;
        cursor: pointer;
        outline: none;

        svg {
          height: 25px;
        }

        &:focus {
          border-color: #09253c;
        }
      }

      @media only screen and (max-width: 800px) {
        button.menu-btn {
          display: flex;
        }

        ul.main-list {
          display: none;
        }

        ul.hidden-list {
          display: flex;
        }
      }
    }
  }
</style>
