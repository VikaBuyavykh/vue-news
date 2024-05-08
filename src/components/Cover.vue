<script>
import Comments from '@/components/UI/Comments.vue'
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    Comments
  },
  props: {
    title: String,
    description: String,
    theme: String,
    themeColor: String,
    date: String,
    comments: Array,
    shares: String,
    img: Object
  },
  computed: {
    ...mapState({
      isFavorite: (state) => state.content.isFavorite,
      likes: (state) => state.content.likes
    })
  },
  methods: {
    ...mapActions({
      saveAsFavorite: 'content/saveAsFavorite'
    })
  }
}
</script>

<template>
  <section v-if="likes" class="cover" :style="{ backgroundImage: `url(${img.src})` }">
    <div class="cover__overlay"></div>
    <div class="cover__content">
      <div class="cover__theme-section">
        <p :style="{ color: themeColor }" class="cover__theme">{{ theme }}</p>
        <router-link to="/" class="cover__home-link">
          <img class="cover__home-img" src="/home.svg" alt="Icon of home page" />
          Back to main
        </router-link>
        <div class="cover__nav">
          <button class="cover__nav-btn">
            <img
              class="cover__nav-btn-img cover__nav-btn-img_prev"
              src="/arrow.svg"
              alt="Icon of the previous article"
            />
            Prev
          </button>
          <button class="cover__nav-btn">
            Next
            <img
              class="cover__nav-btn-img cover__nav-btn-img_next"
              src="/arrow.svg"
              alt="Icon of the next article"
            />
          </button>
        </div>
      </div>
      <img
        @click="saveAsFavorite"
        class="cover__bookmark"
        :src="isFavorite ? '/bookmark-active.svg' : '/bookmark.svg'"
        alt="Icon of a bookmark"
      />
      <h1 class="cover__title">{{ title }}</h1>
      <p class="cover__description">{{ description }}</p>
      <div class="cover__info">
        <div class="cover__main-info">
          <comments type="time" :content="date"></comments>
          <comments type="likes" :content="likes.usersIds.length + likes.hardcodeAmount"></comments>
          <comments type="comments" :content="String(comments.length)"></comments>
        </div>
        <button class="cover__share-btn">
          <img class="cover__share-btn-img" src="/share.svg" alt="Icon of sharing" />{{ shares }}
          Shares
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/fonts/font.scss';
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';

.cover {
  @include size(100%, auto);
  padding-block: 60px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  z-index: 1;

  @include media_sm {
    padding-block: 30px;
  }

  &__overlay {
    position: absolute;
    inset: 0;
    background-color: rgba(#000000, 0.3);
    z-index: 2;
  }

  &__content {
    margin: 0 auto;
    @include size(100%, auto);
    max-width: 946px;
    @include flex(column, start, start, 28px);
    position: relative;
    z-index: 3;

    @include media_lg {
      width: 90%;
    }

    .cover__bookmark {
      @include size(21px, 27px);
      position: absolute;
      top: 90px;
      left: -85px;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        transform: translateY(-2px);
      }

      @include media_lg {
        position: unset;
      }
    }

    .cover__theme-section {
      @include size(100%, auto);
      @include flex(row, end, center, 30px);

      @include media_sm {
        flex-direction: column-reverse;
        gap: 10px;
        align-items: start;
      }

      .cover__theme {
        margin-right: auto;
        text-transform: uppercase;
        @extend %lato-regular;
        font-size: 0.75rem;
        line-height: 0.75rem;

        @include media_sm {
          margin-top: 20px;
        }
      }

      .cover__home-link {
        text-decoration: none;
        @extend %lato-bold;
        @include text(0.875rem, 1.25rem, white, left);
        transition: all 0.2s ease;
        @include flex(row, center, center, 5px);

        &:hover {
          scale: 0.95;
        }

        @include media_sm {
          order: 1;
        }

        .cover__home-img {
          @include size(20px, 20px);
          object-fit: contain;
          object-position: center;
        }
      }

      .cover__nav {
        @include flex(row, start, center, 20px);

        &-btn {
          border: none;
          outline: none;
          background-color: transparent;
          @extend %lato-bold;
          @include text(0.875rem, 1.25rem, white, left);
          cursor: pointer;
          transition: all 0.2s ease;
          @include flex(row, center, center, 5px);

          &:last-of-type:hover {
            transform: translateX(10%);
          }

          &:first-of-type:hover {
            transform: translateX(-10%);
          }

          &-img {
            @include size(20px, 20px);

            &_prev {
              transform: rotate(180deg);
            }
          }
        }
      }
    }

    .cover__title {
      margin-top: 20px;
      @include size(79.3%, auto);
      @extend %roboto-slab-regular;
      @include text(3.4375rem, 4.375rem, white, left);
      letter-spacing: 1.2px;

      @include media_lg {
        margin: 0;
        width: 100%;
      }

      @include media_smaller {
        font-size: 2rem;
        line-height: 2.5rem;
      }
    }

    .cover__description {
      margin-bottom: 30px;
      @include size(58.8%, auto);
      @extend %lato-regular;
      @include text(1.125rem, 1.875rem, white, left);

      @include media_lg {
        width: 100%;
      }

      @include media_smaller {
        font-size: 0.875rem;
        line-height: 1.25rem;
      }
    }

    .cover__info {
      @include flex(row, start, center, 30px);

      @include media_md {
        flex-direction: column;
        align-items: start;
      }

      .cover__main-info {
        @include flex(row, start, center, 20px);
      }

      .cover__share-btn {
        background-color: transparent;
        border: 1px solid white;
        border-radius: 20px;
        padding: 7px 25px;
        @extend %lato-bold;
        @include text(0.875rem, 1.25rem, white, left);
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          scale: 1.05;
        }

        &-img {
          @include size(20px, 20px);
          margin-right: 10px;
          vertical-align: text-bottom;
        }
      }
    }
  }
}
</style>
