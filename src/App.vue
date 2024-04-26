<script>
import AppHeader from '@/components/Header.vue'
import AppFooter from '@/components/Footer.vue'
import axios from 'axios'
export default {
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      articles: []
    }
  },
  methods: {
    async getArticles() {
      try {
        const { data } = await axios.get('https://7b3a9f14b0b4b7d5.mokky.dev/articles')
        this.articles = data
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted() {
    this.getArticles()
  }
}
</script>

<template>
  <div class="page">
    <app-header></app-header>
    <router-view :articles="articles"></router-view>
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
  min-width: 280px;
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
