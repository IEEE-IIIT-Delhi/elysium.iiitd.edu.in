<script>
  export let heading
  export let id
  export let sectionElement
</script>

<section {id} bind:this={sectionElement}>
  <div class="container">
    <h2>{heading}</h2>

    <slot/>
  </div>
</section>

<style lang="scss">
  section {
    display: flex;
    align-items: center;
    justify-content: center;
    scroll-margin-top: 60px;

    .container {
      padding: 5vh 0;
      max-width: 1000px;
      width: 85%;
      display: flex;
      flex-direction: column;
    }
  }

  h2 {
    font-weight: 900;
    font-size: 2.5rem;
    letter-spacing: 3px;
    display: flex;
    color: #00ffc785;

    &::after {
      content: "";
      flex: 1;
      height: 10px;
      background: #0bf9c014;
      margin-left: 20px;
      align-self: flex-end;
      margin-bottom: 10px;
    }
  }
</style>
