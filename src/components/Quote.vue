<script>
export default {
  props: {
    quote: String,
    avatar: String,
    name: String,
    profession: String
  }
}
</script>

<template>
  <div class="quote">
    <img class="quote__img" src="/quote.svg" alt="Image of quotes" />
    <p class="quote__text">{{ quote }}</p>
    <div class="quote__author">
      <img class="quote__author-avatar" :src="avatar" :alt="`${name}'s avatar`" />
      <p class="quote__author-name">{{ name }}</p>
      <p class="quote__author-profession">{{ profession }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/fonts/font.scss';
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';

.quote {
  margin-block: 65px 30px;
  @include size(105%, auto);
  display: grid;
  grid-template-columns: auto 165px;
  gap: 30px;
  position: relative;

  @include media_md {
    margin-block: 35px 10px;
    width: 90%;
    grid-template-columns: 1fr;
    gap: 10px;
    align-self: center;
  }

  &__img {
    opacity: 0.15;
    @include size(70px, 70px);
    position: absolute;
    top: -7%;
    left: -3%;
  }

  &__text {
    @extend %roboto-slab-bold;
    @include text(1.5625rem, 1.875rem, $color-dark, left);
    letter-spacing: -1px;
  }

  &__author {
    @include flex(column, start, start, 0px);

    @include media_md {
      align-items: center;
    }

    &-avatar {
      @include size(60px, 60px);
      border-radius: 50%;
      margin-bottom: 10px;
      object-fit: cover;
      object-position: center;
    }

    &-name {
      @extend %lato-regular;
      @include text(1.125rem, 1.875rem, $font-color-medium, left);
    }

    &-profession {
      @extend %lato-regular;
      @include text(0.875rem, 1.25rem, $font-color-light, left);
    }
  }
}
</style>
