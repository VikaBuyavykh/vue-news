<script>
import Articles from '@/components/Articles.vue'
import Recommendations from '@/components/Recommendations.vue'
import Columns from '@/components/Columns.vue'
import Separator from '@/components/Separator.vue'
import News from '@/components/News.vue'
import Gallery from '@/components/Gallery.vue'
export default {
  components: {
    Articles,
    Recommendations,
    Columns,
    Separator,
    News,
    Gallery
  }
}
</script>

<template>
  <main class="main-content">
    <articles></articles>
    <recommendations></recommendations>
    <columns></columns>
    <separator></separator>
    <news></news>
    <gallery></gallery>
  </main>
</template>

<style lang="scss" scoped>
@import '@/assets/fonts/font.scss';
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';

.main-content {
  @include size(100%, auto);
  @include flex(column, start, center, 0px);
}
</style>
