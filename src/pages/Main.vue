<script>
import { mapState } from 'vuex'
import Articles from '@/components/Articles.vue'
import Recommendations from '@/components/Recommendations.vue'
import Columns from '@/components/Columns.vue'
import Separator from '@/components/Separator.vue'
import News from '@/components/News.vue'
import Gallery from '@/components/Gallery.vue'
export default {
  components: {
    Articles,
    Recommendations,
    Columns,
    Separator,
    News,
    Gallery
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
  computed: {
    ...mapState({
      articles: (state) => state.articles.articles
    })
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
  },
  mounted() {
    this.$store.dispatch('articles/getArticles')
    // console.log(this.$store.state.articles.number)
    // console.log(this.$store.getters['articles/doubleNumber'])
    // this.$store.commit('articles/increment')
    // console.log(this.$store.state.articles.number)
    // console.log(this.$store.getters['articles/doubleNumber'])
  }
}
</script>

<template>
  <main v-if="articles" class="main-content">
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
