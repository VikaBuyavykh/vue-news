export const sliderModule = {
  state: () => ({
    currentSlideIndex: 0,
    buttons: [
      { id: 1, isSelected: false },
      { id: 2, isSelected: false },
      { id: 3, isSelected: false },
      { id: 4, isSelected: false },
      { id: 5, isSelected: false }
    ]
    // intervalId: '',
    // posInit: 0,
    // posFinal: 0,
    // slideWidth: 0,
    // posX: 0,
    // isMousedown: false
  }),
  getters: {
    buttons(state) {
      return state.buttons.map((item) =>
        state.currentSlideIndex !== item.id - 1
          ? { ...item, isSelected: false }
          : { ...item, isSelected: true }
      )
    }
  },
  mutations: {
    // nextSlide(state) {
    //   //заменить 5 на rootState['articles.sliderItems'].length
    //   if (state.currentSlideIndex + 1 < 5) {
    //     state.currentSlideIndex++
    //   } else {
    //     state.currentSlideIndex = 0
    //   }
    // },
    // prevSlide(state) {
    //   if (state.currentSlideIndex > 0) {
    //     state.currentSlideIndex--
    //   } else {
    //     //аналогично с 4 (минус один)
    //     state.currentSlideIndex = 4
    //   }
    // },
    changeSlide(state, e) {
      state.currentSlideIndex = e.currentTarget.id - 1
      // clearInterval(this.intervalId)
      // this.intervalStart()
    }
  },
  actions: {},
  namespaced: true
}
