<script>
export default {
  props: {
    changePopupVisibility: Function
  }
}
</script>

<template>
  <div @click="changePopupVisibility" class="popup">
    <div @click.stop class="popup__content">
      <img
        @click="changePopupVisibility"
        class="popup__close-btn"
        src="/close.svg"
        alt="Close button"
      />
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/fonts/font.scss';
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';

.popup {
  background-color: rgba(black, 0.5);
  position: fixed;
  inset: 0;
  z-index: 3;

  &__content {
    background-color: $bg-color-halfdark;
    @include size(20%, 100%);
    padding: 50px;
    overflow-y: scroll;
    position: relative;

    @include media_lg {
      width: 30%;
    }

    @include media_smaller {
      width: 40%;
    }

    @include media_sm {
      width: 70%;
    }

    @include media_xs {
      width: 90%;
    }

    .popup__close-btn {
      @include size(20px, 20px);
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        opacity: 0.5;
      }
    }
  }
}
</style>
