export const articles2Module = {
  state: () => ({
    number: 20
  }),
  getters: {
    doubleNumber(state) {
      return state.number * 3
    }
  },
  mutations: {
    increment(state) {
      state.number = state.number += 2
    }
  },
  actions: {},
  namespaced: true
}
