<script>
export default {
  props: {
    section: String
  },
  data() {
    return {
      title: this.section === 'columns' ? 'Columns' : 'Recommended for you',
      bg: this.section === 'columns' ? '#6e99ae' : 'white',
      gr: this.section === 'columns' ? '1 / 5' : 'unset',
      height: this.section === 'columns' ? 'auto' : 'fit-content',
      color: this.section === 'columns' ? 'white' : '#262d33'
    }
  }
}
</script>

<template>
  <article class="aside" :style="{ backgroundColor: bg, gridRow: gr, height: height }">
    <h2 :style="{ color: color }" class="aside__title">{{ title }}</h2>
    <ul class="aside__list">
      <slot></slot>
    </ul>
    <a :style="{ color: color }" class="aside__link">Read more</a>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/fonts/font.scss';
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';

.aside {
  border-radius: 10px;
  @include flex(column, space-between, stretch, 0px);
  grid-column: 4 / 5;

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
    border-top: $light-border;
    padding-block: 11px 14px;
    @extend %lato-bold;
    @include text(0.875rem, 1.25rem, white, center);
  }
}
</style>
