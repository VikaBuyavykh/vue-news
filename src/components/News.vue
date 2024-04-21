<script>
import articles from '@/utils/articles'
import Comments from '@/components/UI/Comments.vue'
import AppAside from '@/components/Aside.vue'
export default {
  components: {
    Comments,
    AppAside
  },
  data() {
    const news = articles.filter((article) => article.section === 'news')
    return {
      mainNews: news.filter((item) => item.tag === 'main').filter((i, index) => index < 6),
      asides: news.filter((item) => item.tag === 'aside').filter((i, index) => index < 7)
    }
  },
  methods: {
    clickFavorite(e) {
      this.mainNews = this.mainNews.map((item) =>
        item.id === Number(e.target.closest('.news__list-item').id)
          ? !item.isFavorite
            ? { ...item, isFavorite: true }
            : { ...item, isFavorite: false }
          : item
      )
    }
  }
}
</script>

<template>
  <section class="news">
    <div class="news__content">
      <ul class="news__list">
        <li v-for="item in mainNews" :key="item.id" :id="item.id" class="news__list-item">
          <img
            class="news__list-item-bookmark"
            :src="!item.isFavorite ? '/bookmark.svg' : '/bookmark-active.svg'"
            alt="Icon of a bookmark"
            @click="clickFavorite"
          />
          <div class="news__list-item-imgbox">
            <img
              class="news__list-item-img"
              :src="item.img"
              :alt="`${item.theme}'s article's illustration`"
            />
          </div>
          <div class="news__list-item-container">
            <p :style="{ color: item.themeColor }" class="news__list-item-theme">
              {{ item.theme }}
            </p>
            <h3 class="news__list-item-title">{{ item.title }}</h3>
            <p class="news__list-item-description">{{ item.description }}</p>
            <div class="news__list-item-infoblock">
              <p class="news__date">{{ item.date }}</p>
              <comments type="comments" :content="item.comments"></comments>
              <comments type="likes" :content="item.likes"></comments>
            </div>
          </div>
        </li>
      </ul>
      <app-aside section="news">
        <li v-for="(item, index) in asides" :key="item.id" :id="item.id" class="aside__item">
          <div class="aside__item-imgbox">
            <img class="aside__item-img" :src="item.img" alt="Illustration" />
          </div>
          <div class="aside__item-info">
            <i class="aside__item-index">{{ index + 1 }}</i>
            <h4 class="aside__item-title">{{ item.title }}</h4>
            <p class="aside__item-date">{{ item.date }}</p>
          </div>
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
    gap: 29px;

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
        @include flex(row, stretch, stretch, 25px);
        position: relative;

        &:last-of-type {
          border: none;
        }

        &-bookmark {
          position: absolute;
          top: 0;
          right: 0;
          @include size(14px, 18px);
          cursor: pointer;
        }

        &-imgbox {
          @include size(42.1%, auto);
          position: relative;

          .news__list-item-img {
            position: absolute;
            @include size(100%, 100%);
            object-position: center;
            object-fit: cover;
          }
        }

        &-container {
          @include size(calc(100% - 42.1% - 25px), auto);
          min-height: 195px;
          @include flex(column, start, start, 10px);

          .news__list-item-theme {
            @extend %theme-font;
          }

          .news__list-item-title {
            margin-top: 5px;
            @extend %roboto-slab-bold;
            @include text(1.25rem, 1.5625rem, $color-dark, left);
          }

          .news__list-item-description {
            @extend %lato-regular;
            @include text(0.875rem, 1.25rem, $font-color-medium, left);
          }

          .news__list-item-infoblock {
            @include flex(row, start, center, 10px);
            margin-top: auto;

            .news__date {
              @extend %lato-regular;
              @include text(0.75rem, 0.9375rem, $font-color-light, left);
            }
          }
        }
      }
    }
  }
}

.aside__item {
  border-bottom: $light-border;
  padding-block: 17px;
  @include size(100%, auto);
  display: grid;
  grid-template-columns: 60px auto;
  gap: 10px;

  &:last-of-type {
    border: none;
  }

  &-imgbox {
    @include size(auto, 60px);
    position: relative;

    .aside__item-img {
      object-position: center;
      object-fit: cover;
      position: absolute;
      @include size(100%, 100%);
    }
  }

  &-info {
    @include flex(column, start, start, 5px);
    position: relative;

    .aside__item-index {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      z-index: 1;
      @extend %lato-bold;
      @include text(4.375rem, 3.125rem, rgba($color-dark, 0.08), right);
    }

    .aside__item-title {
      @extend %lato-regular;
      @include text(0.875rem, 1.25rem, $font-color-medium, left);
      z-index: 2;
    }

    .aside__item-date {
      @extend %lato-regular;
      @include text(0.75rem, 0.9375rem, $font-color-light, left);
      z-index: 2;
    }
  }
}
</style>
