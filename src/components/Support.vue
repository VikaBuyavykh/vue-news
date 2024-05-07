<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
export default {
  props: {
    shares: String,
    tweets: String
  },
  computed: {
    ...mapState({
      likes: (state) => state.content.likes
    }),
    ...mapGetters({
      testArticle: 'articles/testArticle'
    })
  },
  methods: {
    ...mapMutations({
      setLikes: 'content/setLikes'
    }),
    ...mapActions({
      like: 'content/like'
    })
  }
}
</script>

<template>
  <div class="support">
    <h3 class="support__title">Show Your Support</h3>
    <ul class="support__btns">
      <li @click="like" class="support__btn support__btn_like">
        <img src="/like.svg" alt="Icon of like" />
        Like it <span>{{ likes.usersIds.length + likes.hardcodeAmount }}</span>
      </li>
      <li class="support__btn support__btn_fb">
        <img src="/fb-icon.svg" alt="Icon of facebook-sharing-button" />
        Share <span>{{ shares }}</span>
      </li>
      <li class="support__btn support__btn_twitter">
        <img src="/twitter-icon.svg" alt="Icon of twitter-sharing-button" />
        Tweet <span>{{ tweets }}</span>
      </li>
      <img class="support__show-more-btn" src="/etc.svg" alt="Icon of show-more-button" />
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/fonts/font.scss';
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';

.support {
  padding-block: 30px;
  @include size(100%, auto);
  @include flex(column, start, start, 25px);

  @include media_smaller {
    align-items: center;
    padding-block: 30px 0;
  }

  &__title {
    @extend %roboto-slab-bold;
    @include text(1.5625rem, 1.875rem, $color-dark, left);
  }

  &__btns {
    @include flex(row, start, center, 10px);

    @include media_smaller {
      flex-direction: column;
    }

    .support__btn {
      border-radius: 20px;
      @include size(auto, 40px);
      padding-inline: 20px 25px;
      @extend %lato-bold;
      @include text(0.875rem, 1.25rem, white, left);
      @include flex(row, start, center, 0px);
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 2px 2px 5px rgba(black, 0.3);
      }

      &_like {
        background-color: $accent-red;
      }

      &_fb {
        background-color: #4267b2;
      }

      &_twitter {
        background-color: #1da1f2;
      }

      img {
        max-height: 18px;
        object-fit: contain;
        object-position: center;
        margin-right: 12px;
      }

      span {
        margin-left: 5px;
        @extend %lato-regular;
        opacity: 0.5;
      }
    }

    .support__show-more-btn {
      border-radius: 50%;
      @include size(40px, 40px);
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 2px 2px 5px rgba(black, 0.3);
      }
    }
  }
}
</style>
