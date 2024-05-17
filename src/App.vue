<script>
import { mapState } from 'vuex'
import AppHeader from '@/components/Header.vue'
import AppFooter from '@/components/Footer.vue'

export default {
  components: {
    AppHeader,
    AppFooter
  },
  computed: {
    ...mapState({
      articles: (state) => state.articles.articles
    })
  },
  mounted() {
    this.$store.dispatch('articles/getArticles')
  }
}
</script>

<template>
  <div class="page">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 16px;
}

.page {
  @include flex(column, start, center, 0px);
  overflow: hidden;
  min-width: $small-screen-min-width;
}

.more-btn {
  &:hover img {
    transform: translateX(5px);
  }

  img {
    transition: all 0.2s ease;
    margin-left: 5px;
  }
}
</style>
