<script>
  import Hero from '../components/home/hero.svelte'
  import Events from '../components/home/events.svelte'
  import Sponsors from '../components/home/sponsors.svelte'

  import { metatags } from '@sveltech/routify'
  metatags.title = 'Elysium · IEEE IIIT-D\'s TechWeek'
  metatags.description = 'Description coming soon...'
</script>

<Hero />

<Events />

<Sponsors />
