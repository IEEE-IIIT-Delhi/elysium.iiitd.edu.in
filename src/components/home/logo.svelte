<script>
  import { spring, tweened } from 'svelte/motion'
	import { cubicOut } from 'svelte/easing'

  let scrollY
  let innerHeight
  let innerWidth
  let logo
  let logoContainer

  const positionX = tweened(0, {
    duration: 100,
    easing: cubicOut
  });
  const positionY = tweened(0, {
    duration: 100,
    easing: cubicOut
  })

  const clamp = (num, min, max) => num <= min ? min : num >= max ? max : num

  function rotate () {
    if (logo) {
      logo.style.transform = `rotate(${Math.min(120, scrollY / innerHeight * 90)}deg)`
    }
  }

  function moveLogo (event) {
    if (logo) {
      let { x: logoX, y: logoY } = logoContainer.getBoundingClientRect()
      let { clientX: mouseX, clientY: mouseY } = event

      logoY = logoY + window.pageYOffset
      mouseY = mouseY + window.pageYOffset

      positionX.set(clamp(mouseX - logoX, -300, 300) / 600 * 20)
      positionY.set(clamp(mouseY - logoY, -300, 300) / 600 * 20)
    }
  }

  $: rotate(scrollY)
</script>

<svelte:window
  bind:scrollY
  bind:innerHeight
  bind:innerWidth
  on:mousemove={moveLogo}
/>

<div class="movable" bind:this={logoContainer} style="transform: translate({$positionX}px, {$positionY}px)">
  <img bind:this={logo} class="logo" src="/images/elysium-logo.svg" alt="Elsyium logo">
</div>

<style lang="scss">
  img.logo {
    max-width: 400px;
    filter: drop-shadow(5px 14px 16px rgba(0,0,0,0.6));
    transition: 0.1s all ease-out;

    &:hover {
      transform: rotate(120deg) scale(1.2) !important;
      transition-duration: 0.5s !important;
    }
  }
</style>
