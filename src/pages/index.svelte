<script>
  import { onMount } from 'svelte'
  import { normalizeForSaEvents } from '../utils'

  import Hero from '../components/sections/hero.svelte'
  import Events from '../components/sections/events.svelte'
  import Timeline from '../components/sections/timeline.svelte'
  import Sponsors from '../components/sections/sponsors.svelte'
  import Contact from '../components/sections/contact.svelte'

  onMount(() => {
    const links = document.querySelectorAll('a')
    for (const link of links) {
      link.addEventListener('click', event => {
        const linkText = normalizeForSaEvents(link.innerText)
        window.sa_event(`link_click_on_${linkText}`)
      })
    }
  })
</script>

<Hero />

<Events />

<Timeline />

<Sponsors />

<Contact />
