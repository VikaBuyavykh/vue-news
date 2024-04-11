<script>
import links from '@/utils/links'
export default {
  data() {
    return {
      links
    }
  }
}
</script>

<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li v-for="link in links" :key="link.name">
        <a :href="link.href" class="navigation__item">{{ link.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import '@/assets/fonts/font.scss';
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';

.navigation {
  @include size(100%, auto);
  padding-block: 17px 18px;
  background-color: $color-dark;

  &__list {
    @include size(100%, auto);
    max-width: $big-screen-max-width;
    margin: 0 auto;
    @include flex(row, space-between, center, 5px);
    list-style-type: none;
  }

  &__item {
    @extend %lato-bold;
    @include text(0.875rem, 1.25rem, white, left);
    letter-spacing: 0.5px;
    text-decoration: none;
    text-transform: uppercase;
  }
}
</style>
