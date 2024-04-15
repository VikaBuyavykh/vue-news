<script>
export default {
  props: {
    type: String,
    content: String
  }
}
</script>

<template>
  <div class="comments">
    <img
      class="comments__img"
      :src="type === 'comments' ? '/comment.svg' : '/likes.svg'"
      :alt="type === 'comments' ? 'Icon of comments' : 'Icon of likes'"
    />
    <p class="comments__text">{{ content }}</p>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/fonts/font.scss';
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';
.comments {
  @include flex(row, start, center, 5px);

  &__img {
    @include size(15px, 15px);
  }

  &__text {
    @extend %lato-regular;
    @include text(0.75rem, 0.9375rem, $font-color-light, left);
  }
}
</style>
