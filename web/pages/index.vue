<template>
      <div>
      <h1 class="title">Hummer</h1>
      <p class="subtitle">Me and you kid we're going to make dont cash</p>
      </div>
    <div>
      <h2>Characters</h2>
    </div>
</template>

<script>
import sanityClient from '../sanityClient'
import SanityImage from '~/components/SanityImage'
import clist from '~/components/clist'

</script>

<style scoped>
@import '../styles/custom-media.css';
@import '../styles/custom-properties.css';

.container {
  padding: 1.5rem 0;
  box-sizing: border-box;
  min-height: calc(100% - 72px - 216px);
}

.header {
  padding: 0 1.5rem;
  text-align: center;
}

.title {
  margin-bottom: 0;
  font-weight: 600;
}


.mainImage {
  width: 100%;
  vertical-align: top;
}
  @media (--media-min-medium) {
    font-size: var(--font-title1-size);
    line-height: var(--font-title1-line-height);
  }

.cListContainer {
  max-width: var(--width-small);
  margin: 0 auto;
  padding: 0 1.5rem;
  box-sizing: border-box;
}
</style>
