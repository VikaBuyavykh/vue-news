import axios from 'axios'

export const articlesModule = {
  state: () => ({
    articles: [],
    recommendations: [],
    columns: [],
    news: [],
    mainNews: [],
    galleryArticles: [],
    testArticles: []
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
    testArticle(state, getters, rootState) {
      return state.testArticles.find((item) => item.id === rootState.content.id)
    },
    firstTestArticleId(state) {
      return state.testArticles.find((item, index) => index === 0).id
    },
    lastTestArticleId(state) {
      return state.testArticles.find((item, index) => index + 1 === state.testArticles.length).id
    },
    testArticleIndex(state, getters) {
      return state.testArticles.indexOf(getters.testArticle)
    }
  },
  mutations: {
    setTestArticles(state, payload) {
      state.testArticles = payload
    },
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
    next({ rootState, getters, state, commit }) {
      let newId = rootState.content.id
      if (rootState.content.id === getters.lastTestArticleId) {
        newId = getters.firstTestArticleId
      } else {
        newId = state.testArticles.find((item, index) => index === getters.testArticleIndex + 1).id
      }
      commit('content/setId', newId, { root: true })
    },
    prev({ rootState, getters, state, commit }) {
      let newId = rootState.content.id
      if (rootState.content.id === getters.firstTestArticleId) {
        newId = getters.lastTestArticleId
      } else {
        newId = state.testArticles.find((item, index) => index === getters.testArticleIndex - 1).id
      }
      commit('content/setId', newId, { root: true })
    },
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
        context.commit(
          'setTestArticles',
          data.filter((item) => item.section === 'article')
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
