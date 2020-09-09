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
    Elysium is organised and hosted by <a href="http://ieee.iiitd.edu.in" target="_blank" rel="noopener">IEEE @ IIIT Delhi</a>.
  </p>
  <p>&copy; 2020 IEEE - IIIT Delhi</p>
</footer>

<style lang='scss'>
  footer {
    width: 85%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 4vh 0;
    border-top: 1px solid #038876;
    opacity: 0.5;
    transition: 0.1s all ease-in;
    letter-spacing: 0;

    &:hover {
      opacity: 1;
    }

    p {
      line-height: 1.7;
      margin-bottom: 5px;
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
