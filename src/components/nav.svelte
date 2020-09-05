<script>
  import { fade } from 'svelte/transition'
  import MenuIcon from '../components/icons/menu.svelte'
  let showMenu = false
</script>

<header>
  <nav>
    <a href="/" class='header'>
      <img src="/images/elysium-logo.svg" alt="Elysium logo">
      ELYISUM
    </a>

    <ul class='main-list'>
      <li><a href="#events">Events</a></li>
      <li><a href="#sponsors">Sponsors</a></li>
    </ul>

    <button class="menu-btn" role="button" on:click={() => showMenu = !showMenu}>
      <MenuIcon strokeColor={'#4b6492'}/>
    </button>

    {#if showMenu}
      <ul class='hidden-list' transition:fade={{ duration: 200 }}>
        <li><a on:click={() => showMenu = false} href="#events">Events</a></li>
        <li><a on:click={() => showMenu = false} href="#sponsors">Sponsors</a></li>
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
      margin: 20px auto;
      max-width: 1000px;
      border-radius: 10px;
      backdrop-filter: blur(8px) brightness(65%);
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      border: 1px solid #09253c;
      box-shadow: 0 10px 20px rgba(0,0,0,0.12);

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
          margin-right: 20px;
        }
      }

      ul {
        display: flex;

        li {
          list-style-type: none;

          a {
            padding: 0 15px;
            text-decoration: none;
            color: #acc9ff;
            font-weight: 300;
            font-size: 1.2rem;
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
            background: #031b46d6;
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
        border: none;
        border-radius: 5px;
        margin-right: 15px;
        padding: 5px;
        background: #031b46d6;
        height: fit-content;
        cursor: pointer;
        outline: none;

        svg {
          height: 25px;
        }
      }

      @media only screen and (max-width: 600px) {
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
