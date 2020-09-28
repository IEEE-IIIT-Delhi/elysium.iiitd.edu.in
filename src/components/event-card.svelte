<script>
  export let name
  export let description
  export let link
</script>

<div class="event hover-highlight--low">
  <h3>{name}</h3>
  <p>{description}</p>
  <a href="{registration}" target="_blank" rel="noopener">Register</a>
</div>

<style lang='scss'>
  .event {
    min-width: 300px;
    flex: 1;
    margin: 2vh;
    padding: 2vh;
    background: #0b182f;
    border-radius: 5px;
    transition: 0.3s all ease-in-out;
    position: relative;
    display: flex;
    flex-direction: column;

    &:hover {
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
      line-height: 1.7;
    }

    p {
      font-weight: 300;
      color: #afb1b4;
      line-height: 1.7;
      letter-spacing: 0;
      font-size: 1rem;
      flex: 1;
    }

    a {
      margin-top: 20px;
      text-align: center;
      display: block;
      border: 1px solid #082e3f;
      color: #12baa3;
      padding: 10px;
      border-radius: 5px;
      font-size: 14px;
      letter-spacing: 0;
      font-weight: 600;
      cursor: pointer;
      transition: 0.2s all ease-in-out;

      &:hover,
      &:focus {
        background: #082e3f;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
      }
    }
  }
</style>
