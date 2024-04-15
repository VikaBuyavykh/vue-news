<script>
export default {
  props: {
    bgColor: String
  }
}
</script>

<template>
  <div :style="{ backgroundColor: bgColor }" class="sign"><slot></slot></div>
</template>

<style lang="scss" scoped>
@import '@/assets/fonts/font.scss';
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';

.sign {
  padding: 5px 12px;
  border-radius: 5px;
  @extend %lato-bold;
  @include text(0.75rem, 0.9375rem, white, center);
}
</style>
