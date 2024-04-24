<script>
import articles from '@/utils/articles'
export default {
  data() {
    return {
      content: articles.filter((item) => item.section === 'articles')
    }
  }
}
</script>

<template>
  <section class="articles">
    <ul class="articles__list">
      <li v-for="article in content" :key="article.id" class="articles__list-item">
        <router-link :to="article.link" class="articles__text">{{ article.title }}</router-link>
        <img :src="article.img.src" :alt="article.img.alt" class="articles__img" />
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/fonts/font.scss';
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';

.articles {
  @include size(100%, auto);
  background-color: $color-dark;
  padding-block: 30px;

  @include media_sm {
    padding-block: 20px;
  }

  &__list {
    @include size(100%, auto);
    max-width: $big-screen-max-width;
    margin: 0 auto;
    padding-block: 25px 30px;
    border-radius: 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    background-color: $bg-color-halfdark;
    list-style-type: none;

    @include media_lg {
      width: 90%;
    }

    @include media_md {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      row-gap: 15px;
    }

    @include media_smaller {
      row-gap: 20px;
    }

    @include media_sm {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(4, 1fr);
    }

    &-item {
      @include size(100%, auto);
      padding-inline: 25px;
      border-right: $border;
      @include flex(row, space-between, center, 15px);

      @include media_lg {
        @include flex(column, space-between, start, 15px);
      }

      @include media_md {
        @include flex(row, space-between, center, 15px);
      }

      @include media_sm {
        width: 90%;
        margin: 0 auto;
        border: none;
        background-color: rgba($color-dark, 0.5);
        border-radius: 5px;
        overflow: hidden;
        padding: 0;
      }

      &:last-of-type {
        border: none;
      }

      &:nth-of-type(2) {
        @include media_md {
          border: none;
        }
      }

      .articles__text {
        text-decoration: none;
        @extend %roboto-slab-bold;
        @include text(0.875rem, 1.5625rem, white, left);

        @include media_sm {
          margin-left: 10px;
        }

        &:hover {
          text-decoration: underline rgba(white, 0.3);
        }
      }

      .articles__img {
        @include size(4.0625rem, 4.0625rem);
        object-fit: cover;
        object-position: center;

        @include media_lg {
          width: 100%;
        }

        @include media_md {
          @include size(4.0625rem, 4.0625rem);
        }

        @include media_smaller {
          height: 100%;
        }
      }
    }
  }
}
</style>
