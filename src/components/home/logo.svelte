<script>
  import { spring, tweened } from 'svelte/motion'
  import { cubicOut } from 'svelte/easing'

  let scrollY
  let innerHeight
  let innerWidth
  let logoContainer
  let bluePortion
  let greenPortion
  let logo

  export let moveLogo = true
  export let size

  const positionX = tweened(0, {
    duration: 400,
    easing: cubicOut
  });
  const positionY = tweened(0, {
    duration: 400,
    easing: cubicOut
  })

  const clamp = (num, min, max) => num <= min ? min : num >= max ? max : num

  function rotate () {
    if (logo) {
      bluePortion.style.transform = `rotate(${Math.min(120, scrollY / innerHeight * 120)}deg)`
      greenPortion.style.transform = `rotate(-${Math.min(120, scrollY / innerHeight * 120)}deg)`
    }
  }

  let logoX, logoY

  function moveLogoCursor (event) {
    if (moveLogo && logo) {
      if (!logoX) {
        const boundingRect = logoContainer.getBoundingClientRect()
        logoX = boundingRect.x
        logoY = boundingRect.y + window.pageYOffset
      }
      let { clientX: mouseX, clientY: mouseY } = event

      mouseY = mouseY + window.pageYOffset

      positionX.set(clamp(mouseX - logoX, -300, 300) / 300 * 20)
      positionY.set(clamp(mouseY - logoY, -300, 300) / 300 * 20)
    }
  }

  function moveLogoOrientation (event) {
    if (moveLogo && logo) {
      let { beta, gamma } = event
      beta = clamp(beta, -90, 90)

      positionX.set(beta / 90 * 40)
      positionY.set(gamma / 90 * 40)
    }
  }

  $: rotate(scrollY)
</script>

<svelte:window
  bind:scrollY
  bind:innerHeight
  bind:innerWidth
  on:mousemove={moveLogoCursor}
  on:deviceorientation={moveLogoOrientation}
/>

<div class="movable" bind:this={logoContainer} style="transform: translate({$positionX}px, {$positionY}px)">
  <svg style={size ? `width: ${size}px` : null} bind:this={logo} class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 305 271">
    <g id="blue" bind:this={bluePortion}>
      <polygon class="cls-1" points="124.05 179.62 96.59 132.67 46.67 221.54 73.29 269.33 124.05 179.62"/>
      <polygon class="cls-2" points="201.67 134.33 175.83 87.67 279.17 88.5 305 134.33 201.67 134.33"/>
      <polygon class="cls-3" points="201.67 134.33 176.05 180.18 277.55 179.31 305 134.33 201.67 134.33"/>
      <polygon class="cls-2" points="75.01 1 126.68 1 176.68 89.33 124.17 89.33 75.01 1"/>
      <polygon class="cls-6" points="73.5 269.33 126.14 269.33 176 181 124.44 179.33 73.5 269.33"/>
      <polygon class="cls-8" points="47.5 47.67 75 1 124.17 88.5 96.67 136 47.5 47.67"/>
    </g>
    <g id="green" bind:this={greenPortion}>
      <polygon class="cls-4" points="151.19 134.33 204.19 134.33 254.17 223.5 200 223.5 151.19 134.33"/>
      <polygon class="cls-5" points="252.5 45.17 200.83 43.5 151.68 134.33 204.17 134.33 252.5 45.17"/>
      <polygon class="cls-7" points="200.83 44.33 175 0.17 124.17 88.5 151.67 135.17 200.83 44.33"/>
      <polygon class="cls-9" points="50.09 136 24.14 88.91 124.26 88.5 152.7 135.82 50.09 136"/>
      <polygon class="cls-10" points="173.75 271 199.31 223.5 253.75 223.5 225 271 173.75 271"/>
      <polygon class="cls-11" points="252.5 45.17 225 0 175 0.17 200.83 44.33 252.5 45.17"/>
      <polygon class="cls-12" points="24.17 88.92 0 136 23.33 181.83 50.67 136.15 24.17 88.92"/>
      <polygon class="cls-13" points="49.55 134.28 23.6 181.38 123.72 181.78 152.16 134.46 49.55 134.28"/>
      <polygon class="cls-14" points="123.11 181.7 151.67 135.17 200.62 223.37 173.95 270.87 123.11 181.7"/>
    </g>
  </svg>
</div>

<style lang="scss">
  .movable {
    display: flex;
    justify-content: center;
  }

  svg.logo {
    max-width: 400px;
    overflow: visible;
    filter: drop-shadow(5px 14px 16px rgba(0,0,0,0.6));

    &:hover {
      #green {
        transform: rotate(120deg) scale(1.2) !important;
        transition-duration: 0.5s !important;
      }
      #blue {
        transform: rotate(-120deg) scale(1.2) !important;
        transition-duration: 0.5s !important;
      }
    }

    g {
      transition: 0.1s all ease-out;
      transform-origin: center;
    }

    .cls-1 {
      fill: #2d69e9;
      stroke: #2d69e9;
      stroke-width: 0.35px;
    }

    .cls-1,
    .cls-6 {
      stroke-miterlimit: 10;
    }

    .cls-2 {
      fill: #25abf4;
    }

    .cls-3 {
      fill: #006deb;
    }

    .cls-4 {
      fill: #0bf9c0;
    }

    .cls-5 {
      fill: #00ffc7;
    }

    .cls-6 {
      fill: #0082ff;
      stroke: #0082ff;
      stroke-width: 0.3px;
    }

    .cls-7 {
      fill: #00f8b9;
    }

    .cls-8 {
      fill: #1e5ed4;
    }

    .cls-9 {
      fill: #00ffc1;
    }

    .cls-10 {
      fill: #22cfa6;
    }

    .cls-11 {
      fill: #22eabc;
    }

    .cls-12 {
      fill: #22c4a6;
    }

    .cls-13 {
      fill: #00d8b3;
    }

    .cls-14 {
      fill: #00e3b8;
    }
  }
</style>
