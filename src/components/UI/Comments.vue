<script>
import axios from 'axios'
import { mapMutations, mapState } from 'vuex'
export default {
  props: {
    type: String,
    content: [String, Number],
    curentUserEstim: [Object, null],
    userEstimate: Array
  },
  data() {
    return {
      arr: []
    }
  },
  computed: {
    ...mapState({
      copyComments: (state) => state.content.copyComments,
      id: (state) => state.user.id,
      articleId: (state) => state.content.id
    }),
    isLikeBtnPressed() {
      const estim = this.userEstimate.find((item) => item.user === this.id)
      if (estim && estim.value > 0) {
        return true
      } else {
        return false
      }
    },
    isDislikeBtnPressed() {
      const estim = this.userEstimate.find((item) => item.user === this.id)
      if (estim && estim.value < 0) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    ...mapMutations({
      setCopyComments: 'content/setCopyComments'
    }),
    async updateComments() {
      try {
        await axios.patch(`https://7b3a9f14b0b4b7d5.mokky.dev/articles/${this.articleId}`, {
          comments: this.copyComments
        })
      } catch (error) {
        console.log(error)
      }
    },
    like(e) {
      const id = e.target.closest('.comments-block__item').getAttribute('id')
      this.arr.map((item) => {
        if (item.id === id) {
          const estim = item.estimate.find((item) => item.user === this.id)
          const estimIndex = item.estimate.indexOf(estim)
          if (estim && estim.value > 0) {
            return { ...item, estimate: item.estimate.splice(estimIndex, 1) }
          } else if (estim && estim.value < 0) {
            return {
              ...item,
              estimate: item.estimate.splice(estimIndex, 1, { user: this.id, value: 1 })
            }
          } else {
            return { ...item, estimate: item.estimate.push({ user: this.id, value: 1 }) }
          }
        } else {
          return item
        }
      })
      this.setCopyComments(this.arr)
      this.updateComments()
    },
    dislike(e) {
      const id = e.target.closest('.comments-block__item').getAttribute('id')
      this.arr.map((item) => {
        if (item.id === id) {
          const estim = item.estimate.find((item) => item.user === this.id)
          const estimIndex = item.estimate.indexOf(estim)
          if (estim && estim.value < 0) {
            return { ...item, estimate: item.estimate.splice(estimIndex, 1) }
          } else if (estim && estim.value > 0) {
            return {
              ...item,
              estimate: item.estimate.splice(estimIndex, 1, { user: this.id, value: -1 })
            }
          } else {
            return { ...item, estimate: item.estimate.push({ user: this.id, value: -1 }) }
          }
        } else {
          return item
        }
      })
      this.setCopyComments(this.arr)
      this.updateComments()
    }
  },
  mounted() {
    if (this.type === 'estimate') {
      this.arr = this.copyComments.slice(0)
    }
  }
}
</script>

<template>
  <div class="comments">
    <img
      @click="(e) => (type === 'estimate' ? like(e) : '')"
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
                : isLikeBtnPressed
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
      @click="(e) => dislike(e)"
      v-if="type === 'estimate'"
      class="comments__img comments__img_dislike"
      :src="isDislikeBtnPressed ? '/class-active.svg' : '/class.svg'"
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
