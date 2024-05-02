import axios from 'axios'

export const articlesModule = {
  state: () => ({
    articles: [],
    recommendations: [],
    columns: [],
    news: [],
    mainNews: [],
    galleryArticles: []
  }),
  getters: {
    articlesContent(state) {
      return state.articles.filter((item) => item.section === 'articles')
    },
    selectedRecommendation(state) {
      return state.recommendations.find((item) => item.isSelected === true)
    },
    columnsMainArticle(state) {
      return state.columns.find((item) => item.tag === 'main')
    },
    columnsPopularArticle(state) {
      return state.columns.find((item) => item.tag === 'popular')
    },
    columnsAsideArticles(state) {
      return state.columns.filter((item) => item.tag === 'aside').filter((i, index) => index < 3)
    },
    columnsAdditionalArticle(state) {
      return state.columns.find((item) => item.tag === 'additional')
    },
    columnsRestArticles(state) {
      return state.columns.filter((item) => !item.tag).filter((i, index) => index < 4)
    },
    separatorArticle(state) {
      return state.articles.find((article) => article.section === 'separator')
    },
    asideNews(state) {
      return state.news.filter((item) => item.tag === 'aside').filter((i, index) => index < 7)
    },
    sliderItems(state) {
      return state.galleryArticles
        .filter((item) => item.tag === 'slider')
        .filter((i, index) => index < 5)
    },
    mainGalleryArticle(state) {
      return state.galleryArticles.find((item) => item.tag === 'main')
    },
    restGalleryArticles(state) {
      return state.galleryArticles.filter((item) => !item.tag).filter((i, index) => index < 2)
    },
    testArticle(state) {
      return state.articles.find((item) => item.section === 'article')
    }
  },
  mutations: {
    setArticles(state, payload) {
      state.articles = payload
    },
    setRecommendations(state, payload) {
      state.recommendations = payload
    },
    selectRecommendation(state, e) {
      state.recommendations.map((item) =>
        item.id == e.currentTarget.id ? (item.isSelected = true) : (item.isSelected = false)
      )
    },
    setColumns(state, payload) {
      state.columns = payload
    },
    setNews(state, payload) {
      state.news = payload
    },
    setMainNews(state, payload) {
      state.mainNews = payload
    },
    setFavorite(state, id) {
      state.mainNews.map((item) => {
        if (item.id === Number(id)) {
          item.isFavorite = !item.isFavorite
        } else {
          return
        }
      })
    },
    setGalleryArticles(state, payload) {
      state.galleryArticles = payload
    }
  },
  actions: {
    async getArticles(context) {
      try {
        const { data } = await axios.get('https://7b3a9f14b0b4b7d5.mokky.dev/articles')
        context.commit('setArticles', data)
        context.commit(
          'setRecommendations',
          data
            .filter((item) => item.section === 'recommendations')
            .map((item, index) => (index === 0 ? { ...item, isSelected: true } : item))
        )
        context.commit(
          'setColumns',
          data.filter((item) => item.section === 'columns')
        )
        context.commit(
          'setNews',
          data.filter((item) => item.section === 'news')
        )
        context.commit(
          'setMainNews',
          data
            .filter((item) => item.section === 'news')
            .filter((item) => item.tag === 'main')
            .filter((i, index) => index < 6)
        )
        context.commit(
          'setGalleryArticles',
          data.filter((item) => item.section === 'gallery')
        )
      } catch (error) {
        console.log(error)
      }
    },
    async clickFavorite(context, e) {
      const element = e.target.closest('.news__list-item')
      try {
        await axios.patch(`https://7b3a9f14b0b4b7d5.mokky.dev/articles/${element.id}`, {
          isFavorite: element.getAttribute('isFavorite') !== 'true'
        })
        context.commit('setFavorite', element.id)
      } catch (error) {
        console.log(error)
      }
    }
  },
  namespaced: true
}
