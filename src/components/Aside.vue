<script>
export default {
  props: {
    section: String
  },
  data() {
    return {
      title: this.section === 'columns' ? 'Columns' : 'Recommended for you',
      color: this.section === 'columns' ? 'white' : '#262d33'
    }
  }
}
</script>

<template>
  <article
    class="aside"
    :class="{ aside_theme_blue: section === 'columns', aside_theme_white: section === 'news' }"
  >
    <h2 :style="{ color: color }" class="aside__title">{{ title }}</h2>
    <ul class="aside__list">
      <slot></slot>
    </ul>
    <router-link to="/#" :style="{ color: color }" class="aside__link">Read more</router-link>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/fonts/font.scss';
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';

.aside {
  border-radius: 10px;
  @include flex(column, space-between, stretch, 0px);
  grid-area: 1 / 4 / 5 / 5;

  &_theme_blue {
    background-color: #6e99ae;
    height: auto;

    @include media_md {
      grid-area: 2 / 1 / 5 / 2;
    }

    @include media_smaller {
      grid-area: 2 / 2 / 5 / 3;
    }
  }

  &_theme_white {
    background-color: white;
    height: fit-content;

    @include media_md {
      grid-area: unset;
    }
  }

  &__title {
    text-transform: uppercase;
    @extend %lato-bold;
    @include text(0.875rem, 1.25rem, null, left);
    border-bottom: $light-border;
    letter-spacing: 0.5px;
    padding: 20px 25px 19px;
  }

  &__list {
    padding: 0 25px;
    @include size(100%, 100%);
    @include flex(column, start, start, 0px);
    list-style-type: none;
  }

  &__link {
    text-decoration: none;
    border-top: $light-border;
    padding-block: 11px 14px;
    @extend %lato-bold;
    @include text(0.875rem, 1.25rem, white, center);
  }
}
</style>
