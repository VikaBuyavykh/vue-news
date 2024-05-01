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
      :src="
        type === 'comments'
          ? '/comment.svg'
          : type === 'likes'
            ? '/likes.svg'
            : type === 'time'
              ? '/clock.svg'
              : type === 'readers'
                ? '/eye.svg'
                : '/class.svg'
      "
      :alt="
        type === 'comments'
          ? 'Icon of comments'
          : type === 'likes'
            ? 'Icon of likes'
            : type === 'likes'
              ? 'Icon of time'
              : type === 'readers'
                ? 'Icon of the number of readers'
                : 'Icon of setting like'
      "
    />
    <p
      class="comments__text"
      :class="{
        comments__text_positive: type === 'estimate' && Number(content) > 0,
        comments__text_negative: type === 'estimate' && Number(content) < 0
      }"
    >
      {{ content }}
    </p>
    <img
      v-if="type === 'estimate'"
      class="comments__img comments__img_dislike"
      src="/class.svg"
      alt="'Icon of setting dislike"
    />
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

    &_dislike {
      transform: rotate(180deg);
    }
  }

  &__text {
    @extend %lato-regular;
    @include text(0.75rem, 0.9375rem, $font-color-light, left);

    &_positive {
      color: $accent-green;
    }

    &_negative {
      color: $accent-red;
    }
  }
}
</style>
