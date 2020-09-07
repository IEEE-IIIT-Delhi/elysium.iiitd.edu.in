<script>
  import events from '../../../data/events.yml'
  import Section from '../section.svelte'
</script>

<Section id={'events'} heading={'Events'} >
  <div class="gallery">
    {#each events as event}
      <div class="event">
        <h3>{event.name}</h3>
        <p>{event.about}</p>
      </div>
    {/each}
  </div>
</Section>

<style lang="scss">
  .gallery {
    display: flex;
    flex-wrap: wrap;
    margin: 2vh -2vh 0 -2vh;

    .event {
      min-width: 300px;
      flex: 1;
      margin: 2vh;
      padding: 2vh;
      background: #040b18;
      border-radius: 10px;
      border: 1px dashed #25abf43d;

      h3 {
        font-weight: 900;
        color: #25abf4;
        font-size: 1.5rem;
        letter-spacing: 1px;
        margin-bottom: 10px;
      }

      p {
        font-weight: 100;
        color: #fff;
        line-height: 1.5;
      }
    }
  }
</style>
