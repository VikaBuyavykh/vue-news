import axios from 'axios'
import {
  COMMENTS_INPUT_SELECTOR,
  SELECTED_COMMENT_SELECTOR,
  COMMENTS_TEXTAREA_SELECTOR,
  COMMENTS_LIST_SELECTOR
} from '@/utils/constants'

export const contentModule = {
  state: () => ({
    firstPartOfTheText: [],
    lastPartOfTheText: [],
    paragraphs: [],
    currentCommentsAmount: 4,
    textOfComment: '',
    id: 42,
    isReply: false,
    replyIndex: null,
    isFavorite: false,
    likes: null
  }),
  getters: {
    comments(state, getters, rootState, rootGetters) {
      return rootGetters['articles/testArticle'].comments
    },
    isMoreBtnDisabled(state, getters) {
      return getters.comments.length <= state.currentCommentsAmount
    }
  },
  mutations: {
    setLikes(state, payload) {
      state.likes = payload
    },
    setIsFavorite(state, payload) {
      state.isFavorite = payload
    },
    clickIsFavorite(state) {
      state.isFavorite = !state.isFavorite
    },
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
    resetTextOfComment(state) {
      state.textOfComment = ''
    },
    pushComments(state, payload) {
      this.state.articles.testArticles.map((item) => {
        if (item.id === state.id) {
          item.comments.push(payload)
        }
      })
    },
    insertComments(state, payload) {
      this.state.articles.testArticles.map((item) => {
        if (item.id === state.id) {
          item.comments.splice(state.replyIndex, 0, payload)
        }
      })
    },
    setParagraphs(state, payload) {
      state.paragraphs = payload
    },
    setText(state) {
      state.firstPartOfTheText = []
      state.lastPartOfTheText = []
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
    commentsReact(state, { id, str }) {
      this.state.articles.testArticles.map((item) => {
        if (item.id === state.id) {
          item.comments.map((item) => {
            if (item.id === id) {
              const estim = item.estimate.find((item) => item.user === this.state.user.id)
              const estimIndex = item.estimate.indexOf(estim)
              if (estim && estim.value > 0) {
                str === 'like'
                  ? { ...item, estimate: item.estimate.splice(estimIndex, 1) }
                  : {
                      ...item,
                      estimate: item.estimate.splice(estimIndex, 1, {
                        user: this.state.user.id,
                        value: -1
                      })
                    }
              } else if (estim && estim.value < 0) {
                str === 'like'
                  ? {
                      ...item,
                      estimate: item.estimate.splice(estimIndex, 1, {
                        user: this.state.user.id,
                        value: 1
                      })
                    }
                  : { ...item, estimate: item.estimate.splice(estimIndex, 1) }
              } else {
                str === 'like'
                  ? {
                      ...item,
                      estimate: item.estimate.push({ user: this.state.user.id, value: 1 })
                    }
                  : {
                      ...item,
                      estimate: item.estimate.push({ user: this.state.user.id, value: -1 })
                    }
              }
            } else {
              return item
            }
          })
        }
      })
    }
  },
  actions: {
    async saveAsFavorite(context) {
      try {
        await axios.patch(`https://7b3a9f14b0b4b7d5.mokky.dev/articles/${context.state.id}`, {
          isFavorite: !context.state.isFavorite
        })
        context.commit('clickIsFavorite')
        context.commit(
          'articles/setFavorite',
          { id: context.state.id, section: context.rootState.articles.testArticles },
          { root: true }
        )
      } catch (error) {
        console.log(error)
      }
    },
    async sbmt({ state, rootState, commit, getters }) {
      if (state.textOfComment !== '') {
        const time = new Date()
        const newComment = {
          name: rootState.user.name,
          avatar: rootState.user.avatar,
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
          text: state.textOfComment,
          estimate: [],
          reply: state.isReply,
          id: String(time)
        }
        try {
          if (state.isReply) {
            commit('insertComments', newComment)
          } else {
            commit('pushComments', newComment)
          }
          await axios.patch(`https://7b3a9f14b0b4b7d5.mokky.dev/articles/${state.id}`, {
            comments: getters.comments
          })
          commit('resetTextOfComment')
          if (state.isReply) {
            commit('setCurrentCommentsAmount', state.replyIndex + 1)
            commit('setIsReply', false)
            commit('setReplyIndex', null)
          } else {
            commit('setCurrentCommentsAmount', getters.comments.length)
            setTimeout(() => {
              document
                .querySelector(COMMENTS_LIST_SELECTOR)
                .scrollIntoView({ behavior: 'smooth', block: 'end' })
            }, 0)
          }
        } catch (error) {
          console.log(error)
        }
      }
    },
    reply({ state, commit }, e) {
      commit(
        'setReplyIndex',
        Number(e.currentTarget.closest(SELECTED_COMMENT_SELECTOR).getAttribute('index')) + 1
      )
      commit('setCurrentCommentsAmount', state.replyIndex)
      document.querySelector(COMMENTS_INPUT_SELECTOR).focus()
      commit('setIsReply', true)
    },
    addComment({ commit }) {
      document
        .querySelector(COMMENTS_TEXTAREA_SELECTOR)
        .scrollIntoView({ behavior: 'smooth', block: 'center' })
      document.querySelector(COMMENTS_INPUT_SELECTOR).focus()
      commit('setIsReply', false)
      commit('setReplyIndex', null)
    },
    async like({ state, commit }) {
      const obj = Object.assign({}, state.likes)
      obj.usersIds = state.likes.usersIds.slice(0)
      try {
        if (obj.usersIds.includes(this.state.user.id)) {
          obj.usersIds.splice(obj.usersIds.indexOf(this.state.user.id), 1)
        } else {
          obj.usersIds.push(this.state.user.id)
        }
        await axios.patch(`https://7b3a9f14b0b4b7d5.mokky.dev/articles/${state.id}`, {
          likes: obj
        })
        commit('articles/setReaction', { id: state.id, obj: obj }, { root: true })
      } catch (error) {
        console.log(error)
      }
    },
    async updateComments({ state, getters }) {
      try {
        await axios.patch(`https://7b3a9f14b0b4b7d5.mokky.dev/articles/${state.id}`, {
          comments: getters.comments
        })
      } catch (error) {
        console.log(error)
      }
    },
    react(context, { e, str }) {
      const id = e.target.closest(SELECTED_COMMENT_SELECTOR).getAttribute('id')
      context.commit('commentsReact', { id, str })
      context.dispatch('updateComments')
    }
  },
  namespaced: true
}
