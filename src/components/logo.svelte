<script>
  import { onMount } from 'svelte'
  import { tweened } from 'svelte/motion'
  import { cubicOut } from 'svelte/easing'
  import { clamp, isIos } from '../utils'

  export let size = 'auto'
  export let moveLogo = true
  export let rotateLogo = true

  let scrollY
  let innerHeight
  let innerWidth
  let logo
  let logoX
  let logoY
  let bluePortion
  let greenPortion
  let isIosDevice = false
  let rotateChecks = false
  let moveCursorChecks = false
  let moveOrientationChecks = false

  const positionX = tweened(0, {
    duration: 400,
    easing: cubicOut
  })
  const positionY = tweened(0, {
    duration: 400,
    easing: cubicOut
  })

  function rotate () {
    if (rotateChecks) {
      const angle = scrollY / innerHeight * 120
      bluePortion.style.transform = `rotate(${angle}deg)`
      greenPortion.style.transform = `rotate(-${angle}deg)`
    }
  }

  function moveCursor (event) {
    if (moveCursorChecks) {
      if (!logoX) {
        const boundingRect = logo.getBoundingClientRect()
        logoX = boundingRect.x
        logoY = boundingRect.y + window.pageYOffset
      }
      let { clientX: mouseX, clientY: mouseY } = event

      mouseY = mouseY + window.pageYOffset

      positionX.set(clamp(mouseX - logoX, -300, 300) / 300 * 10)
      positionY.set(clamp(mouseY - logoY, -300, 300) / 300 * 10)
    }
  }

  function moveOrientation (event) {
    if (moveOrientationChecks) {
      let { beta, gamma } = event
      beta = 90 - clamp(beta, -90, 90)

      positionX.set(gamma / 90 * 40)
      positionY.set(beta / 90 * 40)
    }
  }

  $: rotate(scrollY)

  onMount(() => {
    isIosDevice = isIos()
    rotateChecks = !isIosDevice && rotateLogo && logo
    moveCursorChecks = !isIosDevice && moveLogo && logo
    moveOrientationChecks =
      !isIosDevice &&
      moveLogo &&
      window.DeviceOrientationEvent &&
      'ontouchstart' in window &&
      logo
  })
</script>

<svelte:window
  bind:scrollY
  bind:innerHeight
  bind:innerWidth
  on:mousemove={moveCursor}
  on:deviceorientation={moveOrientation}
/>

<svg
  bind:this={logo}
  style="width: {size}; transform: translate({$positionX}px, {$positionY}px)"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 305 271"
>
  <g bind:this={bluePortion} id="blue">
    <polyline class="cls-1" points="127.88 0 75.86 0 152.94 132.35 178.7 87.74"/>
    <polyline class="cls-2" points="280.09 87.88 303.87 130.74 152.95 132.35 178.7 87.74"/>
    <polyline class="cls-3" points="179.83 180.02 276.87 179.74 303.87 130.74 152.95 132.35 75.86 0 52.01 44.87 99.51 132.56 152.95 132.35"/>
    <polyline class="cls-4" points="71.87 267.74 152.95 132.35 179.83 180.02 127.87 267.74"/>
    <polyline class="cls-5" points="71.87 267.74 48.74 220.47 99.51 132.56 152.95 132.35"/>
  </g>
  <g bind:this={greenPortion} id="green">
    <line class="cls-10" x1="177.67" y1="2.27" x2="202.95" y2="45.55"/>
    <polyline class="cls-7" points="254.46 220.3 202.95 220.3 152.37 132.43 203.89 132.43 254.46 44.55 202.95 44.55 152.37 132.42 203.89 132.42 254.52 220.29"/>
    <polyline class="cls-11" points="124.53 179.54 175.11 267.41 202.95 220.3 152.37 132.43 202.95 44.55 177.67 1.27 125.48 86.26 152.37 132.43"/>
    <polyline class="cls-12" points="50.85 132.42 152.37 132.43 124.53 179.54 23.01 179.53"/>
    <polyline class="cls-9" points="50.85 132.42 23.95 86.25 125.48 86.26 152.37 132.43"/>
    <polygon class="cls-13" points="23 179.53 50.84 132.42 23.94 86.25 0 132.89 23 179.53"/>
    <polyline class="cls-14" points="175.09 267.41 202.93 220.3 254.45 220.3"/>
    <polyline class="cls-14" points="175.16 267.4 223.48 267.26 254.52 220.29 202.93 220.3"/>
    <polygon class="cls-13" points="177.67 1.27 202.95 44.55 254.46 44.55 230.31 1.27 177.67 1.27"/>
  </g>
</svg>

<style lang="scss">
  svg {
    overflow: visible;
    filter: drop-shadow(5px 14px 16px rgba(0,0,0,0.6));

    &:hover {
      #green {
        transform: rotate(120deg) scale(1.2) !important;
      }
      #blue {
        transform: rotate(-120deg) scale(1.2) !important;
      }
      g {
        transition-duration: 0.5s !important;
      }
    }

    g {
      transition: 0.1s all ease-out;
      transform-origin: center;
    }

    .cls-1 {
      fill:#147df4;
    }

    .cls-2 {
      fill:#008cff;
    }

    .cls-3 {
      fill:#1e5ed2;
    }

    .cls-4 {
      fill:#0580fd;
    }

    .cls-5 {
      fill:#2d69e7;
    }

    .cls-6 {
      fill:lime;
      stroke:#000;
      stroke-miterlimit:10;
    }

    .cls-7 {
      fill:#72f3c2;
    }

    .cls-8 {
      fill:#66e6b7;
    }

    .cls-9 {
      fill:#74f9c4;
    }

    .cls-10 {
      fill:none;
    }

    .cls-11 {
      fill:#60e7bb;
    }

    .cls-12 {
      fill:#61d3b4;
    }

    .cls-13 {
      fill:#5dc0a6;
    }

    .cls-14 {
      fill:#4ed5ac;
    }

    .cls-15 {
      fill:#62caa7;
    }
  }
</style>
