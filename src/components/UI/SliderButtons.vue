<script>
export default {
  props: {
    buttons: Array,
    changeSlide: Function
  }
}
</script>

<template>
  <ul @click.stop class="btns-list">
    <li
      v-for="button in buttons"
      :id="button.id"
      :key="button.id"
      :class="{
        'btns-list__item_active': button.isSelected,
        'btns-list__item': !button.isSelected
      }"
      style="cursor: pointer"
      @click="changeSlide"
    >
      <div v-if="button.isSelected" class="btns-list__active-item-inside"></div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@import '@/assets/fonts/font.scss';
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';

.btns-list {
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5px;
  list-style-type: none;

  &__item {
    margin: 6px;
    @include size(8px, 8px);
    border-radius: 50%;
    background-color: rgba(white, 0.4);

    &_active {
      @include size(20px, 20px);
      position: relative;
      @include flex(row, center, center, 0px);

      &::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 50%;
        background: conic-gradient(white 230deg, rgba(white, 0.4) 230deg);
        mask: radial-gradient(farthest-side, transparent calc(100% - 2px), #fff 0);
      }

      .btns-list__active-item-inside {
        @include size(8px, 8px);
        border-radius: 50%;
        background-color: white;
      }
    }
  }
}
</style>
