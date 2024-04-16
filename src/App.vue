<script>
import AppHeader from '@/components/Header.vue'
import AppMain from '@/components/Main.vue'
import AppFooter from '@/components/Footer.vue'
export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter
  }
}
</script>

<template>
  <div class="page">
    <app-header></app-header>
    <app-main></app-main>
    <app-footer></app-footer>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 16px;
}

.page {
  @include flex(column, start, center, 0px);
}
</style>
