<script>
export default {
  props: {
    text: String
  }
}
</script>

<template>
  <button type="button" class="btn">{{ text }}</button>
</template>

<style lang="scss" scoped>
@import '@/assets/fonts/font.scss';
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';

.btn {
  margin-top: 20px;
  border: none;
  outline: none;
  background-color: $accent-blue;
  border-radius: 20px;
  padding: 10px 30px;
  @extend %lato-regular;
  @include text(0.75rem, 0.9375rem, white, center);
}
</style>
