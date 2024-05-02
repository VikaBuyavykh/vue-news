<script>
export default {
  props: {
    keys: Array
  }
}
</script>

<template>
  <ul class="tags">
    <li v-for="item in keys" :key="item" class="tags__item">{{ item }}</li>
  </ul>
</template>

<style lang="scss" scoped>
@import '@/assets/fonts/font.scss';
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';

.tags {
  @include size(100%, auto);
  padding-block: 27px 57px;
  list-style-type: none;
  @include flex(row, start, center, 8px);
  border-bottom: $border;
  flex-wrap: wrap;

  @include media_md {
    padding-block: 17px 47px;
  }

  &__item {
    border: $border;
    border-radius: 5px;
    padding: 5px 14px;
    @extend %lato-bold;
    @include text(0.875rem, 1.25rem, $color-dark, left);
  }
}
</style>
