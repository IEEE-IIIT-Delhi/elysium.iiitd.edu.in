<script>
  export let strokeColor = '#fff'
  export let open = false
</script>

<svg
  class:open
  xmlns="http://www.w3.org/2000/svg"
  width="30"
  height="30"
  viewBox="0 0 24 24"
  fill="none"
  stroke="{strokeColor}"
  stroke-width="1"
  stroke-linecap="round"
  stroke-linejoin="round"
><path d="M6 9l6 6 6-6"/></svg>

<style>
  svg {
    transition: 0.2s all ease-in-out;
  }

  svg.open {
    transform: rotate(180deg);
  }
</style>
