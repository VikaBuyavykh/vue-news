<script>
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
  props: {
    type: String,
    content: [String, Number],
    reaction: Object
  },
  computed: {
    ...mapState({
      copyComments: (state) => state.content.copyComments,
      id: (state) => state.user.id,
      articleId: (state) => state.content.id,
      anotherCopy: (state) => state.content.anotherCopy
    })
  },
  methods: {
    ...mapMutations({
      setCopyComments: 'content/setCopyComments',
      setAnotherCopy: 'content/setAnotherCopy'
    }),
    ...mapActions({
      react: 'content/react'
    })
  },
  mounted() {
    if (this.type === 'estimate') {
      this.setAnotherCopy(this.copyComments.slice(0))
    }
  }
}
</script>

<template>
  <div class="comments">
    <img
      @click="(e) => (type === 'estimate' ? react({ e, str: 'like' }) : '')"
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
                : reaction && reaction.value > 0
                  ? '/class-active.svg'
                  : '/class.svg'
      "
      :alt="
        type === 'comments'
          ? 'Icon of comments'
          : type === 'likes'
            ? 'Icon of likes'
            : type === 'time'
              ? 'Icon of time'
              : type === 'readers'
                ? 'Icon of the number of readers'
                : 'Icon of setting like'
      "
    />
    <p
      class="comments__text"
      :class="{
        comments__text_positive: type === 'estimate' && content > 0,
        comments__text_negative: type === 'estimate' && content < 0
      }"
    >
      {{ type !== 'estimate' ? content : content > 0 ? `+${content}` : content }}
    </p>
    <img
      @click="(e) => react({ e, str: 'dis' })"
      v-if="type === 'estimate'"
      class="comments__img comments__img_dislike"
      :src="reaction && reaction.value < 0 ? '/class-active.svg' : '/class.svg'"
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
