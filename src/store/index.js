import { createStore } from 'vuex'
import { articlesModule } from '@/store/modules/articles'
import { articles2Module } from './modules/articles2'

export default createStore({
  modules: {
    articles: articlesModule,
    articles2: articles2Module
  }
})
