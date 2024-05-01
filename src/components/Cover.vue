<script>
import Comments from '@/components/UI/Comments.vue'
export default {
  components: {
    Comments
  }
}
</script>

<template>
  <section class="cover">
    <div class="cover__content">
      <img class="cover__bookmark" src="/bookmark.svg" alt="Icon of a bookmark" />
      <div class="cover__theme-section">
        <p class="cover__theme">Destinations</p>
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
      <h1 class="cover__title">Five Travel Stories From 2017 to Help You Escape Into the World</h1>
      <p class="cover__description">
        From the coastlines of Europe to remote Kodiak Island, Alaska, here are five of our favorite
        stories to help you explore the world
      </p>
      <div class="cover__info">
        <div class="cover__main-info">
          <comments type="time" content="Aug 6, 10:23 pm"></comments>
          <comments type="likes" content="830"></comments>
          <comments type="comments" content="19"></comments>
        </div>
        <button class="cover__share-btn">
          <img class="cover__share-btn-img" src="/share.svg" alt="Icon of sharing" />142 Shares
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
  background-image: url('/article/moto.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  &__content {
    margin: 0 auto;
    @include size(100%, auto);
    max-width: 946px;
    @include flex(column, start, start, 28px);
    position: relative;

    .cover__bookmark {
      @include size(21px, 27px);
      position: absolute;
      top: 90px;
      left: -85px;
    }

    .cover__theme-section {
      @include size(100%, auto);
      @include flex(row, end, center, 15px);

      .cover__theme {
        margin-right: auto;
        text-transform: uppercase;
        @extend %lato-regular;
        @include text(0.75rem, 0.9375rem, #4592ff, left);
      }

      .cover__home-link {
        text-decoration: none;
        @extend %lato-bold;
        @include text(0.875rem, 1.25rem, white, left);
        transition: all 0.2s ease;

        &:hover {
          scale: 0.95;
        }

        .cover__home-img {
          @include size(20px, 20px);
          object-fit: contain;
          object-position: center;
          margin-right: 5px;
          vertical-align: text-bottom;
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

          &:last-of-type:hover {
            transform: translateX(10%);
          }

          &:first-of-type:hover {
            transform: translateX(-10%);
          }

          &-img {
            @include size(20px, 20px);
            vertical-align: text-bottom;

            &_prev {
              margin-right: 5px;
              transform: rotate(180deg);
            }

            &_next {
              margin-left: 5px;
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
    }

    .cover__description {
      margin-bottom: 30px;
      @include size(58.8%, auto);
      @extend %lato-regular;
      @include text(1.125rem, 1.875rem, white, left);
    }

    .cover__info {
      @include flex(row, start, center, 30px);

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
