import axios from 'axios'

export const articlesModule = {
  state: () => ({
    articles: []
  }),
  mutations: {
    setArticles(state, payload) {
      state.articles = payload
    }
  },
  actions: {
    async getArticles(context) {
      try {
        const { data } = await axios.get('https://7b3a9f14b0b4b7d5.mokky.dev/articles')
        context.commit('setArticles', data)
      } catch (error) {
        console.log(error)
      }
    }
  },
  namespaced: true
}
