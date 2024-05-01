<script></script>

<template>
  <div class="quote">
    <img class="quote__img" src="/quote.svg" alt="Image of quote" />
    <p class="quote__text">
      Names of places... are not geography... know by heart a whole gazetteer full of them would
      not, in itself, constitute anyone a geographer. Geography has higher aims than this: it seeks
      to classify phenomena.
    </p>
    <div class="quote__author">
      <img class="quote__author-avatar" src="/authors/travel-agent.png" alt="Author's avatar" />
      <p class="quote__author-name">William Peterson</p>
      <p class="quote__author-profession">Travel Agent</p>
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
  column-gap: 30px;
  position: relative;

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

    &-avatar {
      @include size(60px, 60px);
      border-radius: 50%;
      margin-bottom: 10px;
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
