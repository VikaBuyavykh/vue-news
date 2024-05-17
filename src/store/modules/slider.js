import { GALLERY_SLIDER_SELECTOR } from '@/utils/constants'

export const sliderModule = {
  state: () => ({
    currentSlideIndex: 0,
    buttons: [
      { id: 1, isSelected: false },
      { id: 2, isSelected: false },
      { id: 3, isSelected: false },
      { id: 4, isSelected: false },
      { id: 5, isSelected: false }
    ],
    intervalId: '',
    posInit: 0,
    posFinal: 0,
    slideWidth: 0,
    posX: 0,
    isMousedown: false
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
    setSlideWidth(state, payload) {
      state.slideWidth = payload
    },
    nextSlide(state) {
      if (state.currentSlideIndex + 1 < this.getters['articles/sliderItems'].length) {
        state.currentSlideIndex++
      } else {
        state.currentSlideIndex = 0
      }
    },
    prevSlide(state) {
      if (state.currentSlideIndex > 0) {
        state.currentSlideIndex--
      } else {
        state.currentSlideIndex = this.getters['articles/sliderItems'].length - 1
      }
    },
    changeSlide(state, e) {
      state.currentSlideIndex = e.currentTarget.id - 1
      clearInterval(state.intervalId)
      this.commit('slider/intervalStart')
    },
    intervalStart: function (state) {
      const self = this
      state.intervalId = setInterval(() => {
        self.commit('slider/nextSlide')
      }, 5000)
    },
    start(state, e) {
      const element = e.currentTarget.closest(GALLERY_SLIDER_SELECTOR)
      if (e.type === 'touchstart') {
        state.posInit = e.touches[0].clientX
      } else {
        state.posInit = e.clientX
      }
      state.isMousedown = true
      element.style.cursor = 'grab'
      element.style.transition = 'none'
    },
    move(state, e) {
      const element = e.currentTarget.closest(GALLERY_SLIDER_SELECTOR)
      if (state.isMousedown) {
        if (e.type === 'touchmove') {
          state.posX = state.posInit - e.touches[0].clientX
        } else {
          state.posX = state.posInit - e.clientX
        }
        if (
          (state.currentSlideIndex === 0 && state.posX < 0) ||
          (state.currentSlideIndex === this.getters['articles/sliderItems'].length - 1 &&
            state.posX > 0)
        ) {
          return
        } else {
          element.style.marginLeft = `${state.posX * -1 + state.currentSlideIndex * state.slideWidth * -1}px`
        }
      }
    },
    end(state, e) {
      const element = e.currentTarget.closest(GALLERY_SLIDER_SELECTOR)
      if (state.isMousedown) {
        if (e.type === 'touchend') {
          state.posFinal = e.changedTouches[0].clientX
        } else {
          state.posFinal = e.clientX
        }
        if (Math.abs(state.posInit - state.posFinal) > state.slideWidth * 0.35) {
          if (state.posInit - state.posFinal > 0) {
            this.commit('slider/nextSlide')
          } else {
            this.commit('slider/prevSlide')
          }
          clearInterval(state.intervalId)
          this.commit('slider/intervalStart')
        } else {
          element.style.marginLeft = `${state.currentSlideIndex * state.slideWidth * -1}px`
        }
      }
      state.isMousedown = false
      element.style.cursor = 'pointer'
      element.style.transition = 'all 1s ease'
    }
  },
  actions: {},
  namespaced: true
}
