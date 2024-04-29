import axios from 'axios'

export const headerModule = {
  state: () => ({
    isLoginHovered: false,
    isSearchHovered: false,
    isMenuHovered: false,
    date: '',
    temp: null,
    weatherIcon: null,
    searchQuery: '',
    isSectionsVisible: true,
    isPopupVisible: false
  }),
  mutations: {
    changeSectionsVisibility(state) {
      state.isSectionsVisible = !state.isSectionsVisible
    },
    changePopupVisibility(state) {
      state.isPopupVisible = !state.isPopupVisible
    },
    setSearchQuery(state, e) {
      state.searchQuery = e.target.value
    },
    setTemp(state, payload) {
      state.temp = payload
    },
    setWeatherIcon(state, payload) {
      state.weatherIcon = payload
    },
    setDate(state, payload) {
      state.date = payload
    },
    hoverLogin(state) {
      !state.isLoginHovered ? (state.isLoginHovered = true) : (state.isLoginHovered = false)
    },
    hoverSearch(state) {
      !state.isSearchHovered ? (state.isSearchHovered = true) : (state.isSearchHovered = false)
    },
    hoverMenu(state) {
      !state.isMenuHovered ? (state.isMenuHovered = true) : (state.isMenuHovered = false)
    }
  },
  actions: {
    async getWeather() {
      try {
        const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
          params: {
            q: 'Moscow',
            units: 'metric',
            appid: 'b463ca9aaa0838203592e4617935e4ca'
          }
        })
        this.commit('header/setTemp', Math.round(data.main.temp))
        this.commit(
          'header/setWeatherIcon',
          `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        )
      } catch (error) {
        console.log(error)
      }
    }
  },
  namespaced: true
}
