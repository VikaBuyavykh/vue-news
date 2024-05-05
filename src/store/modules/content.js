import axios from 'axios'

export const contentModule = {
  state: () => ({
    firstPartOfTheText: [],
    lastPartOfTheText: [],
    paragraphs: [],
    currentCommentsAmount: 4,
    textOfComment: '',
    copyComments: [],
    id: null,
    isReply: false,
    replyIndex: null
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
    setReplyIndex(state, payload) {
      state.replyIndex = payload
    },
    setIsReply(state, payload) {
      state.isReply = payload
    },
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
    insertCopyComments(state, payload) {
      state.copyComments.splice(state.replyIndex, 0, payload)
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
      state.isReply = false
      state.replyIndex = null
    },
    showEverything(state) {
      state.currentCommentsAmount = state.copyComments.length
    }
  },
  actions: {
    async sbmt(context) {
      const time = new Date()
      const newComment = {
        name: context.rootState.user.name,
        avatar: context.rootState.user.avatar,
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
        estimate: [],
        reply: context.state.isReply
      }
      try {
        if (context.state.isReply) {
          context.commit('insertCopyComments', newComment)
        } else {
          context.commit('pushCopyComments', newComment)
        }
        await axios.patch(`https://7b3a9f14b0b4b7d5.mokky.dev/articles/${context.state.id}`, {
          comments: context.state.copyComments
        })
        context.commit('resetTextOfComment', '')
        if (context.state.isReply) {
          context.commit('setCurrentCommentsAmount', context.state.replyIndex + 1)
          context.commit('setIsReply', false)
          context.commit('setReplyIndex', null)
        } else {
          context.commit('showEverything')
          setTimeout(() => {
            document
              .querySelector('.comments-block__item_last')
              .scrollIntoView({ behavior: 'smooth', block: 'center' })
          }, 0)
        }
      } catch (error) {
        console.log(error)
      }
    },
    reply({ state, commit }, e) {
      commit(
        'setReplyIndex',
        Number(e.currentTarget.closest('.comments-block__item').getAttribute('index')) + 1
      )
      commit('setCurrentCommentsAmount', state.replyIndex)
      document.querySelector('#comment-text').focus()
      commit('setIsReply', true)
    }
  },
  namespaced: true
}
