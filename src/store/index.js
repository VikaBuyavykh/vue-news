import { createStore } from 'vuex'
import { articlesModule } from '@/store/modules/articles'
import { sliderModule } from '@/store/modules/slider'

export default createStore({
  modules: {
    articles: articlesModule,
    slider: sliderModule
  }
})
