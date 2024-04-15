<script>
export default {
  props: {
    title: String,
    description: String,
    date: String
  }
}
</script>

<template>
  <article class="rest">
    <h3 class="rest__title">{{ title }}</h3>
    <p class="rest__text">{{ description }}</p>
    <p class="rest__date">{{ date }}</p>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/fonts/font.scss';
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';

.rest {
  border-radius: 10px;
  background-color: white;
  padding: 25px 25px 30px;
  @include flex(column, start, stretch, 5px);

  &__title {
    @extend %roboto-slab-bold;
    @include text(1rem, 1.5625rem, $color-dark, left);
  }

  &__text {
    @extend %lato-regular;
    @include text(0.875rem, 1.25rem, $font-color-medium, left);
    margin-bottom: 5px;
  }

  &__date {
    @extend %lato-regular;
    @include text(0.75rem, 0.9375rem, $font-color-light, left);
  }
}
</style>
