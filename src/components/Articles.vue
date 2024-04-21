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

  &__list {
    @include size(100%, auto);
    max-width: $big-screen-max-width;
    margin: 0 auto;
    padding-block: 25px 30px;
    border-radius: 10px;
    @include flex(row, space-between, center, 0px);
    background-color: $bg-color-halfdark;
    list-style-type: none;

    &-item {
      padding-inline: 25px;
      border-right: $border;
      @include flex(row, space-between, center, 15px);

      &:last-of-type {
        border: none;
      }

      .articles__text {
        text-decoration: none;
        @extend %roboto-slab-bold;
        @include text(1rem, 1.5625rem, white, left);

        &:hover {
          text-decoration: underline rgba(white, 0.3);
        }
      }

      .articles__img {
        @include size(4.0625rem, 4.0625rem);
      }
    }
  }
}
</style>
