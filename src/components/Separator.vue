<script>
import articles from '@/utils/articles'
import AppButton from '@/components/UI/Button.vue'
export default {
  components: {
    AppButton
  },
  data() {
    return {
      separator: articles.find((article) => article.section === 'separator')
    }
  }
}
</script>

<template>
  <article class="separator" :style="{ backgroundImage: `url(${separator.img})` }">
    <h2 class="separator__title">{{ separator.title }}</h2>
    <app-button class="more-btn"
      >Read more <img class="gallery__btn-img" src="/arrow.svg" alt="Icon of arrow"
    /></app-button>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/fonts/font.scss';
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';

.separator {
  padding-block: 50px 55px;
  @include size(100%, auto);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @include flex(column, start, center, 5px);

  &__title {
    @include size(60%, auto);
    max-width: 946px;
    @extend %roboto-slab-bold;
    @include text(2.5rem, 3.125rem, white, center);
  }
}
</style>
