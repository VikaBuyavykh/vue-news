export const footerModule = {
  state: () => ({
    searchQuery: ''
  }),
  mutations: {
    setSearchQuery(state, e) {
      state.searchQuery = e.target.value
    }
  },
  namespaced: true
}
