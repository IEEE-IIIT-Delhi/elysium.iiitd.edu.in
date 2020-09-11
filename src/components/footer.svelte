<script>
  import Logo from './logo.svelte'
</script>

<footer>
  <p>
    <Logo
      size={'15px'}
      moveLogo={false}
      rotateLogo={false}
    />
    Elysium is undertaken, organised and hosted by <a href="https://ieee.iiitd.edu.in" target="_blank" rel="noopener">IEEE @ IIIT Delhi</a>
  </p>
  <p>Built by <a href="https://mihir.ch" target="_blank" rel="noopener">Mihir Chaturvedi</a> &middot; Graphics by Prakhar Prasad</p>
  <p>&copy; 2020 IEEE - IIIT Delhi</p>
</footer>

<style lang='scss'>
  footer {
    width: 85%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 4vh 0;
    border-top: 1px solid #0388768a;
    opacity: 0.5;
    transition: 0.1s all ease-in;
    letter-spacing: 0;
    font-size: 0.9rem;

    &:hover {
      opacity: 1;
    }

    p {
      line-height: 1.5;
      margin-bottom: 7.5px;
      text-align: center;
    }

    a {
      text-decoration: none;
      color: #038876;

      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
