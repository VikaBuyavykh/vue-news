<script>
import Comments from '@/components/UI/Comments.vue'
import AppButton from '@/components/UI/Button.vue'
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
export default {
  components: {
    Comments,
    AppButton
  },
  props: {
    comments: Array
  },
  computed: {
    ...mapState({
      currentCommentsAmount: (state) => state.content.currentCommentsAmount,
      textOfComment: (state) => state.content.textOfComment,
      copyComments: (state) => state.content.copyComments,
      avatar: (state) => state.user.avatar,
      userId: (state) => state.user.id,
      replyIndex: (state) => state.content.replyIndex
    }),
    ...mapGetters({
      currentComments: 'content/currentComments',
      isMoreBtnDisabled: 'content/isMoreBtnDisabled',
      testArticle: 'articles/testArticle'
    })
  },
  methods: {
    ...mapMutations({
      setCopyComments: 'content/setCopyComments',
      setCurrentCommentsAmount: 'content/setCurrentCommentsAmount',
      showMore: 'content/showMore',
      showEverything: 'content/showEverything',
      setTextOfComment: 'content/setTextOfComment'
    }),
    ...mapActions({
      sbmt: 'content/sbmt',
      reply: 'content/reply',
      addComment: 'content/addComment'
    })
  },
  created() {
    this.setCopyComments(this.comments.slice(0))
  },
  unmounted() {
    this.setCurrentCommentsAmount(4)
  },
  watch: {
    testArticle() {
      this.setCopyComments(this.comments.slice(0))
    }
  }
}
</script>

<template>
  <section class="comments-block">
    <TransitionGroup name="list" tag="ul" class="comments-block__content">
      <li key="header" class="comments-block__header">
        <div class="comments-block__title-group">
          <h3 class="comments-block__title">Comments</h3>
          <p class="comments-block__amount">{{ copyComments.length }}</p>
        </div>
        <button @click="addComment" class="comments-block__add-btn">
          <img src="/add.svg" alt="Icon of adding a comment" />
          Add comment
        </button>
      </li>
      <li
        v-for="(item, index) in currentComments"
        :key="item.id"
        :index="index"
        :id="item.id"
        class="comments-block__item"
        :class="{
          'comments-block__item_last': index === currentComments.length - 1,
          'comments-block__item_reply': index === replyIndex - 1
        }"
      >
        <div
          class="comments-block__item-content"
          :class="{ 'comments-block__item-content_reply': item.reply }"
        >
          <img class="comments-block__avatar" :src="item.avatar" alt="Author's avatar" />
          <div class="comments-block__main">
            <div class="comments-block__info">
              <p class="comments-block__name">{{ item.name }}</p>
              <p class="comments-block__date">{{ item.date }}</p>
            </div>
            <p class="comments-block__text">{{ item.text }}</p>
            <div class="comments-block__btns">
              <comments @click="reply" type="comments" content="Reply"></comments>
              <comments
                type="estimate"
                :reaction="item.estimate.find((item) => item.user === userId)"
                :content="item.estimate.map((item) => item.value).reduce((a, b) => a + b, 0)"
              ></comments>
            </div>
          </div>
        </div>
      </li>
      <li key="button" @click="showMore" v-if="!isMoreBtnDisabled" class="comments-block__more-btn">
        <img src="/loading.svg" alt="Icon of more-button" />Load more
      </li>
      <li key="comment" class="comments-block__comment">
        <img class="comments-block__comment-avatar" :src="avatar" alt="Avatar" />
        <form
          @submit.prevent="sbmt"
          name="comment"
          id="comment"
          class="comments-block__comment-form"
        >
          <label for="comment-text" class="comments-block__question">What do you think?</label>
          <div class="comments-block__textarea">
            <img src="/shape.png" alt="Textarea border" />
            <textarea
              :value="textOfComment"
              @input="setTextOfComment"
              name="comment-text"
              id="comment-text"
            ></textarea>
          </div>
          <app-button type="sbmt" class="comments-block__sbmt-btn">
            Submit<img src="/arrow.svg" alt="Icon of submit" />
          </app-button>
        </form>
      </li>
    </TransitionGroup>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/fonts/font.scss';
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.comments-block {
  @include size(100%, auto);
  max-width: 946px;
  margin: 60px auto 30px;

  @include media_lg {
    width: 90%;
    margin-block: 0;
  }

  &__content {
    @include size(79.3%, auto);
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(min-content, max-content));
    list-style-type: none;

    @include media_lg {
      width: 80%;
      margin: 0 auto;
    }

    @include media_md {
      width: 90%;
    }

    @include media_smaller {
      width: 100%;
    }

    .comments-block__header {
      @include size(100%, auto);
      padding-bottom: 30px;
      @include flex(row, space-between, center, 10px);
      border-bottom: $border;

      @include media_smaller {
        flex-direction: column;
      }

      .comments-block__title-group {
        @include flex(row, start, center, 10px);

        .comments-block__title {
          @extend %roboto-slab-bold;
          @include text(2.5rem, 3.125rem, $color-dark, left);

          @include media_smaller {
            font-size: 1.75rem;
            line-height: 2rem;
          }
        }

        .comments-block__amount {
          @extend %lato-regular;
          @include text(2.5rem, 3.125rem, $font-color-light, left);
        }
      }

      .comments-block__add-btn {
        border-radius: 20px;
        background-color: transparent;
        outline: none;
        border: $border;
        padding: 10px 25px 10px 20px;
        @include flex(row, start, center, 10px);
        @extend %lato-bold;
        @include text(0.875rem, 1.25rem, $color-dark, left);
        cursor: pointer;
        transition: all 0.2s ease;

        @include media_smaller {
          padding-block: 5px;
        }

        &:hover {
          transform: translateY(-2px);
          box-shadow: 2px 2px 5px rgba(black, 0.3);
        }

        img {
          @include size(18px, 18px);
        }
      }
    }

    .comments-block__item {
      @include size(100%, auto);
      padding-block: 20px 30px;
      border-bottom: $border;

      &_last {
        border: none;
      }

      &_reply {
        .comments-block__item-content {
          background-color: #f5f5f5;
          border-radius: 20px;
        }
      }

      &-content {
        @include size(88%, auto);
        display: grid;
        grid-template-columns: 75px auto;
        column-gap: 15px;

        @include media_smaller {
          grid-template-columns: 50px auto;
        }

        &_reply {
          margin-left: auto;
        }

        .comments-block__avatar {
          @include size(100%, 75px);
          border-radius: 50%;
          object-fit: cover;
          object-position: center;

          @include media_smaller {
            height: 50px;
          }
        }

        .comments-block__main {
          @include size(100%, auto);
          @include flex(column, start, start, 10px);

          .comments-block__info {
            @include flex(row, start, center, 10px);

            @include media_smaller {
              flex-direction: column;
              align-items: start;
              gap: 0;
            }

            .comments-block__name {
              @extend %roboto-slab-bold;
              @include text(1rem, 1.5625rem, $color-dark, left);
            }

            .comments-block__date {
              @extend %lato-regular;
              @include text(0.75rem, 0.9375rem, $font-color-light, left);
            }
          }

          .comments-block__text {
            margin-bottom: 5px;
            @extend %lato-regular;
            @include text(1.125rem, 1.875rem, $font-color-medium, left);

            @include media_smaller {
              font-size: 0.875rem;
              line-height: 1.125rem;
            }
          }

          .comments-block__btns {
            @include flex(row, start, center, 15px);
          }
        }
      }
    }

    .comments-block__more-btn {
      @include size(100%, 50px);
      border: $border;
      border-radius: 30px;
      @include flex(row, center, center, 7px);
      @extend %lato-bold;
      @include text(0.875rem, 1.25rem, $color-dark, left);
      cursor: pointer;
      transition: all 0.2s ease;
      margin-bottom: 60px;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 2px 2px 5px rgba(black, 0.3);
      }

      img {
        @include size(15px, 15px);
      }
    }

    .comments-block__comment {
      @include size(100%, auto);
      background-color: #f5f5f5;
      border-radius: 10px;
      padding: 30px 40px 35px 30px;
      display: grid;
      grid-template-columns: 75px auto;
      column-gap: 10px;

      @include media_sm {
        grid-template-columns: 1fr;
        padding: 15px 10px 20px 5px;
      }

      &-avatar {
        margin-top: 40px;
        @include size(100%, 75px);
        border-radius: 50%;

        @include media_sm {
          display: none;
        }
      }

      &-form {
        @include size(100%, auto);
        @include flex(column, start, start, 15px);

        .comments-block__question {
          margin-left: 10px;
          @extend %roboto-slab-bold;
          @include text(1.25rem, 1.5625rem, $color-dark, left);
        }

        .comments-block__textarea {
          @include size(100%, 130px);
          position: relative;
          @include flex(row, center, center, 0px);

          img {
            position: absolute;
            width: 100%;
            height: 130px;
          }

          textarea {
            @include size(90%, 85%);
            position: relative;
            z-index: 2;
            background-color: transparent;
            resize: none;
            outline: none;
            border: none;
          }
        }

        .comments-block__sbmt-btn {
          margin-left: 10px;
          margin-top: 0;
          @include flex(row, center, center, 8px);
        }
      }
    }
  }
}
</style>
