<script>
  import { onMount } from 'svelte'
  import smoothscroll from 'smoothscroll-polyfill'

  import Nav from '../components/nav.svelte'
  import Footer from '../components/footer.svelte'

  onMount(() => {
    smoothscroll.polyfill()
  })
</script>

<Nav />

<main>
  <slot />
</main>

<Footer />

<style lang="scss" global>
  @import "../styles/global.scss";
  @import "../styles/common.scss";
</style>
