import { createStore } from 'vuex'
import { articlesModule } from '@/store/modules/articles'
import { sliderModule } from '@/store/modules/slider'
import { headerModule } from '@/store/modules/header'
import { footerModule } from '@/store/modules/footer'
import { contentModule } from '@/store/modules/content'

export default createStore({
  modules: {
    articles: articlesModule,
    slider: sliderModule,
    header: headerModule,
    footer: footerModule,
    content: contentModule
  }
})
