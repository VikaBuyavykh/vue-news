<script></script>

<template>
  <ul class="tags">
    <li class="tags__item">Travel</li>
    <li class="tags__item">Destinations</li>
    <li class="tags__item">Nature</li>
    <li class="tags__item">World</li>
    <li class="tags__item">Alaska</li>
  </ul>
</template>

<style lang="scss" scoped>
@import '@/assets/fonts/font.scss';
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';

.tags {
  @include size(100%, auto);
  padding-block: 30px 60px;
  list-style-type: none;
  @include flex(row, start, center, 10px);
  border-bottom: $border;

  &__item {
    border: $border;
    border-radius: 5px;
    padding: 5px 15px;
    @extend %lato-bold;
    @include text(0.875rem, 1.25rem, $color-dark, left);
  }
}
</style>
