<script>
export default {
  props: {
    type: String
  }
}
</script>

<template>
  <button :type="type === 'sbmt' ? 'submit' : 'button'" class="btn"><slot></slot></button>
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
  padding: 10px 22px;
  @extend %lato-bold;
  @include text(0.875rem, 1.25rem, white, left);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 1px 2px 4px rgba(black, 0.4);
  }
}
</style>
