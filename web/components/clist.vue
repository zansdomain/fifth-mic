<template>
  <ul v-if="characters" class="character">
    <li v-for="cRef in characters" :key="cRef.character._id" class="character">
      <nuxt-link :to="{ path: `/characters/${cRef.character.slug.current}` }">
        <SanityImage
          :image="cRef.character.avatar"
          :alt="cRef.character.image.alt"
          :width="128"
          :height="128"
          fit="crop"
          class="characterImage"
        />
        {{ cRef.character.name }}
      </nuxt-link>
    </li>
  </ul>
</template>
<script>
import SanityImage from '~/components/SanityImage'
 
export default {
  components: {
    SanityImage
  },
  props: {
    character: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style scoped>
@import '../styles/custom-properties.css';
 
.session.characters {
  margin: 1rem 0 0;
  padding: 0;
  font-size: var(--font-small-size);
  line-height: var(--font-small-line-height);
}
 
.session.characters.character {
  display: flex;
  margin: 0.5rem 0 0;
  padding: 0;
  align-items: center;
}
 
.session.characters.character a {
  display: contents;
  color: inherit;
  text-decoration: inherit;
  line-height: 1.75;
}
 
.characterImage {
  height: 1.75rem;
  margin-right: 0.5rem;
  border-radius: 50%;
}
</style>
