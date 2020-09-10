<script>
  export let alt
  export let src
  const webpSrc = [src.split('.').slice(0, -1), 'webp'].join('.')
</script>

<picture>
  {#if process.env.NODE_ENV !== 'development'}
    <source srcset='{webpSrc}' type='image/webp'>
  {/if}
  <source srcset='{src}' type='image/jpeg'> 
  <img {src} {alt}>
</picture>
