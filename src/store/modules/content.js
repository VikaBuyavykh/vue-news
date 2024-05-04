import axios from 'axios'

export const contentModule = {
  state: () => ({
    firstPartOfTheText: [],
    lastPartOfTheText: [],
    paragraphs: [],
    currentCommentsAmount: 4,
    textOfComment: '',
    copyComments: [],
    id: null
  }),
  getters: {
    currentComments(state) {
      return state.copyComments.filter((item, index) => index < state.currentCommentsAmount)
    },
    isMoreBtnDisabled(state, getters) {
      return getters.currentComments.length === state.copyComments.length
    }
  },
  mutations: {
    setId(state, payload) {
      state.id = payload
    },
    setTextOfComment(state, e) {
      state.textOfComment = e.target.value
    },
    resetTextOfComment(state, payload) {
      state.textOfComment = payload
    },
    setCopyComments(state, payload) {
      state.copyComments = payload
    },
    pushCopyComments(state, payload) {
      state.copyComments.push(payload)
    },
    setParagraphs(state, payload) {
      state.paragraphs = payload
    },
    setText(state) {
      state.paragraphs.forEach((item, index) => {
        if (index < Math.floor(state.paragraphs.length / 2)) {
          state.firstPartOfTheText.push({ ...item, index: index })
        } else {
          state.lastPartOfTheText.push({ ...item, index: index })
        }
      })
    },
    setCurrentCommentsAmount(state, payload) {
      state.currentCommentsAmount = payload
    },
    showMore(state) {
      state.currentCommentsAmount += 2
    },
    showEverything(state) {
      state.currentCommentsAmount = state.copyComments.length
    }
  },
  actions: {
    async sbmt(context, e) {
      e.preventDefault()
      const time = new Date()
      const newComment = {
        name: 'Maria Ivanova',
        avatar: '/authors/girl-in-hat.png',
        date: `${time.toLocaleString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        })}, ${time
          .toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric'
          })
          .toLowerCase()}`,
        text: context.state.textOfComment,
        estimate: '0'
      }
      try {
        await axios.patch(`https://7b3a9f14b0b4b7d5.mokky.dev/articles/${context.state.id}`, {
          comments: [...context.state.copyComments, newComment]
        })
        context.commit('pushCopyComments', newComment)
        context.commit('resetTextOfComment', '')
        context.commit('showEverything')
        setTimeout(() => {
          document
            .querySelector('.comments-block__item_last')
            .scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 0)
      } catch (error) {
        console.log(error)
      }
    }
  },
  namespaced: true
}
