export const carouselModule = {
  state: () => ({
    slideIndex: 0
  }),
  getters: {
    gallery(state, getters, rootState, rootGetters) {
      return rootGetters['articles/testArticle'].gallery
    }
  },
  mutations: {
    setSlideIndex(state, payload) {
      state.slideIndex = payload
    }
  },
  actions: {
    next({ state, getters, commit }) {
      if (state.slideIndex === getters.gallery.length - 1) {
        commit('setSlideIndex', 0)
      } else {
        let newValue = state.slideIndex
        newValue++
        commit('setSlideIndex', newValue)
      }
    },
    prev({ state, getters, commit }) {
      if (state.slideIndex === 0) {
        commit('setSlideIndex', getters.gallery.length - 1)
      } else {
        let newValue = state.slideIndex
        newValue--
        commit('setSlideIndex', newValue)
      }
    }
  },
  namespaced: true
}
