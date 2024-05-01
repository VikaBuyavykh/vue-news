<script>
import Comments from '@/components/UI/Comments.vue'
export default {
  components: {
    Comments
  }
}
</script>

<template>
  <div class="material">
    <h3 class="material__name">Material on Theme</h3>
    <img class="material__img" src="/article/giraffe.png" alt="Material's image" />
    <h4 class="material__title">Application of Postcolonial Theory in the Middle East</h4>
    <p class="material__description">
      In the essays "Overstating the Arab State", by Nazih Ayubi, and "Is Jordan Palestine?", by
      Raphael Israel, the authors deal with the psychologically fragmented postcolonial identity.
    </p>
    <div class="material__info">
      <comments type="readers" content="1,623"></comments>
      <comments type="comments" content="102"></comments>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/fonts/font.scss';
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';

.material {
  margin-top: 150px;
  @include size(100%, fit-content);
  display: grid;
  grid-template-rows: repeat(5, minmax(min-content, max-content));
  row-gap: 5px;
  cursor: pointer;

  &__name {
    @extend %roboto-slab-bold;
    @include text(1.25rem, 1.5625rem, $color-dark, left);
  }

  &__img {
    margin-block: 15px 10px;
    @include size(100%, 180px);
    object-fit: cover;
    object-position: center;
    border-radius: 10px;
    overflow: hidden;
  }

  &__title {
    @extend %roboto-slab-bold;
    @include text(1rem, 1.5625rem, $color-dark, left);
  }

  &__description {
    @extend %lato-regular;
    @include text(0.875rem, 1.25rem, $font-color-medium, left);
  }

  &__info {
    margin-top: 15px;
    @include flex(row, start, center, 10.75px);
  }
}
</style>
