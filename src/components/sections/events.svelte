<script>
  import events from '../../../data/events.yml'
  import Section from '../section.svelte'
  import EventCard from '../event-card.svelte'
</script>

<Section id={'events'} heading={'Events'} >
  <div class="gallery">
    {#each events as event}
      <EventCard {...event} />
    {/each}
  </div>
</Section>

<style lang="scss">
  .gallery {
    display: flex;
    flex-wrap: wrap;
    margin: 2vh -2vh 0;
  }
</style>
