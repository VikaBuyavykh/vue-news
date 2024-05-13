<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import Comments from '@/components/UI/Comments.vue'
import AppAside from '@/components/Aside.vue'
export default {
  components: {
    Comments,
    AppAside
  },
  computed: {
    ...mapState({
      mainNews: (state) => state.articles.mainNews
    }),
    ...mapGetters({
      asides: 'articles/asideNews'
    })
  },
  methods: {
    ...mapActions({
      clickFavorite: 'articles/clickFavorite'
    })
  }
}
</script>

<template>
  <section v-if="mainNews" class="news">
    <div class="news__content">
      <ul class="news__list">
        <li
          v-for="item in mainNews"
          :key="item.id"
          :id="item.id"
          :isFavorite="item.isFavorite"
          class="news__list-item"
        >
          <picture>
            <source :srcset="item.img.big" media="(min-width: 1000px)" />
            <img class="news__list-item-img" :src="item.img.small" :alt="item.img.alt" />
          </picture>
          <div class="news__list-item-container">
            <img
              class="news__bookmark"
              :src="!item.isFavorite ? '/bookmark.svg' : '/bookmark-active.svg'"
              alt="Icon of a bookmark"
              @click="clickFavorite"
            />
            <p :style="{ color: item.themeColor }" class="news__list-item-theme">
              {{ item.theme }}
            </p>
            <router-link :to="item.link" class="news__list-item-link">
              <h3 class="news__list-item-title">{{ item.title }}</h3>
              <p class="news__list-item-description">{{ item.description }}</p>
            </router-link>
            <div class="news__list-item-infoblock">
              <p class="news__date">{{ item.date }}</p>
              <comments type="comments" :content="item.comments"></comments>
              <comments type="likes" :content="item.likes"></comments>
            </div>
          </div>
        </li>
      </ul>
      <app-aside section="news">
        <li v-for="(item, index) in asides" :key="item.id" :id="item.id" class="news__aside-item">
          <router-link :to="item.link" class="news__aside-link">
            <div class="news__aside-imgbox">
              <picture>
                <source :srcset="item.img.big" media="(min-width: 1000px)" />
                <img class="news__aside-img" :src="item.img.small" :alt="item.img.alt" />
              </picture>
            </div>
            <div class="news__aside-info">
              <i class="news__aside-index">{{ index + 1 }}</i>
              <h4 class="news__aside-title">{{ item.title }}</h4>
              <p class="news__aside-date">{{ item.date }}</p>
            </div>
          </router-link>
        </li>
      </app-aside>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/fonts/font.scss';
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';

.news {
  @include size(100%, auto);
  background-color: $bg-color-light;

  &__content {
    margin: 60px auto;
    @include size(100%, auto);
    max-width: $big-screen-max-width;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 29px;

    @include media_lg {
      width: 90%;
    }

    @include media_md {
      @include flex(column, start, stretch, 30px);
    }

    @include media_sm {
      gap: 10px;
      margin-block: 20px;
    }

    .news__list {
      grid-column: 1 / 4;
      @include size(auto, fit-content);
      @include flex(column, start, stretch, 0px);
      list-style-type: none;
      background-color: white;
      border-radius: 10px;

      &-item {
        margin: 25px 25px 0;
        padding-bottom: 25px;
        border-bottom: $border;
        display: grid;
        grid-template-columns: 42.1% auto;
        gap: 25px;

        @include media_sm {
          grid-template-columns: 1fr;
          grid-template-rows: repeat(2, minmax(min-content, max-content));
        }

        &:last-of-type {
          border: none;
        }

        &-img {
          @include size(100%, 100%);
          object-position: center;
          object-fit: cover;
        }

        &-container {
          @include size(100%, auto);
          min-height: 195px;
          @include flex(column, start, start, 10px);
          position: relative;

          .news__bookmark {
            position: absolute;
            top: 2px;
            right: 3px;
            @include size(14px, 18px);
            cursor: pointer;
          }

          .news__list-item-theme {
            padding-top: 5px;
            @extend %theme-font;
          }

          .news__list-item-link {
            @include flex(column, start, start, 10px);
            text-decoration: none;

            .news__list-item-title {
              margin-top: 5px;
              @extend %roboto-slab-bold;
              @include text(1.25rem, 1.5625rem, $color-dark, left);
            }

            .news__list-item-description {
              @extend %lato-regular;
              @include text(0.875rem, 1.25rem, $font-color-medium, left);
            }
          }

          .news__list-item-infoblock {
            @include flex(row, start, center, 10px);
            margin-block: auto 5px;

            .news__date {
              @extend %lato-regular;
              @include text(0.75rem, 0.9375rem, $font-color-light, left);
            }
          }
        }
      }
    }

    .news__aside-item {
      border-bottom: $light-border;
      padding-block: 17px;
      @include size(100%, auto);

      &:last-of-type {
        border: none;
      }

      .news__aside-link {
        @include size(100%, auto);
        display: grid;
        grid-template-columns: 60px auto;
        gap: 10px;
        text-decoration: none;

        .news__aside-imgbox {
          align-self: center;
          @include size(auto, 60px);
          position: relative;

          .news__aside-img {
            object-position: center;
            object-fit: cover;
            position: absolute;
            @include size(100%, 100%);
          }
        }

        .news__aside-info {
          @include flex(column, start, start, 5px);
          position: relative;

          .news__aside-index {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 0;
            z-index: 1;
            @extend %lato-bold;
            @include text(4.375rem, 3.125rem, rgba($color-dark, 0.08), right);
          }

          .news__aside-title {
            @extend %lato-regular;
            @include text(0.875rem, 1.25rem, $font-color-medium, left);
            z-index: 2;
          }

          .news__aside-date {
            @extend %lato-regular;
            @include text(0.75rem, 0.9375rem, $font-color-light, left);
            z-index: 2;
          }
        }
      }
    }
  }
}
</style>
