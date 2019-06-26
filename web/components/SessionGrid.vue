<template>
  <ul class="sessionGrid">
    <li v-for="character in Characters" :key="character._id" class="session">
      <nuxt-link :to="`/characters/${character._id}`">
        <span class="top">
          <span>
            <span class="type">{{ character.characterType }}</span>
            <h2 class="sessionTitle">{{ character.name }}</h2>
          </span>
        </span>
        <p>
          Later put magic here
        </p>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
import clist from '~/components/clist'

export default {
 
  components: {
    clist
  },
  props: {
    showCharacters: {
      type: Boolean,
      default: false
    },
  }
}
</script>

<style scoped>
@import '../styles/custom-properties.css';

.sessionGrid {
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  grid-gap: 3rem;
}

h2.sessionTitle {
  font-weight: 600;
  font-size: var(--font-title3-size);
  line-height: var(--font-title3-line-height);
  margin: 0;
  margin-top: 0.5rem;
}

.session {
  display: flex;
  flex-direction: column;

  @nest & p {
    margin: 0.5rem 0;
  }
}

.sessionGrid a {
  color: inherit;
  text-decoration: inherit;
}

.session .top {
  display: flex;
  justify-content: space-between;
}

.sessionGrid a > span {
  display: block;
}

.sessionGrid a span.type {
  font-size: var(--font-small-size);
  line-height: var(--font-small-line-height);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.session .time {
  font-size: var(--font-small-size);
  line-height: var(--font-small-line-height);
  margin-top: 0;
  color: var(--color-gray);
}
</style>
