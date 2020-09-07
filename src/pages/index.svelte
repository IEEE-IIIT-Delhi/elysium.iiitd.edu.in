<script>
  import { metatags } from '@sveltech/routify'

  import Hero from '../components/sections/hero.svelte'
  import Events from '../components/sections/events.svelte'
  import Timeline from '../components/sections/timeline.svelte'
  import Sponsors from '../components/sections/sponsors.svelte'
  import Contact from '../components/sections/contact.svelte'

  metatags.title = 'Elysium · IEEE IIIT-D\'s TechWeek'
  metatags.description = 'Description coming soon...'
</script>

<Hero />

<Events />

<Timeline />

<Sponsors />

<Contact />
