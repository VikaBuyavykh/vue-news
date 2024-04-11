<script>
import AppHeader from '@/components/Header.vue'
export default {
  components: {
    AppHeader
  }
}
</script>

<template>
  <div class="page">
    <app-header></app-header>
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
