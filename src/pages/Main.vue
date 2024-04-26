<script>
import Articles from '@/components/Articles.vue'
import Recommendations from '@/components/Recommendations.vue'
import Columns from '@/components/Columns.vue'
import Separator from '@/components/Separator.vue'
import News from '@/components/News.vue'
import Gallery from '@/components/Gallery.vue'
export default {
  props: {
    articles: Array
  },
  data() {
    return {
      articlesContent: [],
      recommendationsContent: [],
      columnsContent: [],
      separatorContent: {},
      newsContent: [],
      galleryContent: []
    }
  },
  components: {
    Articles,
    Recommendations,
    Columns,
    Separator,
    News,
    Gallery
  },
  watch: {
    articles() {
      this.articlesContent = this.articles.filter((item) => item.section === 'articles')
      this.recommendationsContent = this.articles.filter(
        (item) => item.section === 'recommendations'
      )
      this.columnsContent = this.articles.filter((item) => item.section === 'columns')
      this.separatorContent = this.articles.find((article) => article.section === 'separator')
      this.newsContent = this.articles.filter((article) => article.section === 'news')
      this.galleryContent = this.articles.filter((item) => item.section === 'gallery')
    }
  }
}
</script>

<template>
  <main class="main-content">
    <articles :articlesContent="articlesContent"></articles>
    <recommendations :recommendationsContent="recommendationsContent"></recommendations>
    <columns :columnsContent="columnsContent"></columns>
    <separator :separatorContent="separatorContent"></separator>
    <news :newsContent="newsContent"></news>
    <gallery :galleryContent="galleryContent"></gallery>
  </main>
</template>

<style lang="scss" scoped>
@import '@/assets/fonts/font.scss';
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';

.main-content {
  @include size(100%, auto);
  @include flex(column, start, center, 0px);
}
</style>
