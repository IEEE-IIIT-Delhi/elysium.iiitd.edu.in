<script>
  export let name
  export let description
</script>

<div class="event">
  <h3>{name}</h3>
  <p>{description}</p>
</div>

<style lang='scss'>
  .event {
    min-width: 300px;
    flex: 1;
    margin: 2vh;
    padding: 2vh;
    background: #0b182f;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.1s all ease-in-out;
    position: relative;

    &:hover {
      background: #0f1c34;
      box-shadow: 0 20px 10px -10px #040b18;
    }

    h3 {
      font-weight: 900;
      color: #8ba6d6;
      font-size: 1.3rem;
      letter-spacing: 1px;
      margin-bottom: 10px;
      letter-spacing: 0;
      text-shadow: 0 0 20px #6283bf85;
    }

    p {
      font-weight: 300;
      color: #afb1b4;
      line-height: 1.7;
      letter-spacing: 0;
      font-size: 1rem;
    }
  }
</style>
