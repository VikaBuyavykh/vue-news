<script>
import Comments from '@/components/UI/Comments.vue'
export default {
  components: {
    Comments
  }
}
</script>

<template>
  <section class="selection">
    <ul class="selection__content">
      <li class="selection__item">
        <img class="selection__img" src="/article/food.jpg" alt="Image" />
        <h3 class="selection__title">An Evangelist of Singaporean Food Has a New Pulpit</h3>
        <div class="selection__info">
          <comments type="readers" content="1,904"></comments>
          <comments type="comments" content="82"></comments>
        </div>
      </li>
      <li class="selection__item">
        <img class="selection__img" src="/article/river.png" alt="Image" />
        <h3 class="selection__title">
          At the Mouth of the Mississippi, a Weird and Fragile Beauty
        </h3>
        <div class="selection__info">
          <comments type="readers" content="2,873"></comments>
          <comments type="comments" content="982"></comments>
        </div>
      </li>
      <li class="selection__item">
        <img class="selection__img" src="/article/flower.png" alt="Image" />
        <h3 class="selection__title">Chattanooga Is Changing. But Its Charms Remain.</h3>
        <div class="selection__info">
          <comments type="readers" content="821"></comments>
          <comments type="comments" content="30"></comments>
        </div>
      </li>
      <li class="selection__item">
        <img class="selection__img" src="/article/girl.png" alt="Image" />
        <h3 class="selection__title">How to Get by in a Country if You Don’t Know the Language</h3>
        <div class="selection__info">
          <comments type="readers" content="5,030"></comments>
          <comments type="comments" content="495"></comments>
        </div>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/fonts/font.scss';
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';

.selection {
  @include size(100%, auto);
  padding-block: 60px 90px;
  margin-block: 60px 30px;
  background-color: #f5f5f5;

  @include media_lg {
    padding-block: 30px;
    margin-block: 30px;
  }

  &__content {
    margin: 0 auto;
    @include size(100%, auto);
    max-width: $big-screen-max-width;
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;

    @include media_lg {
      width: 90%;
      grid-template-columns: repeat(2, 1fr);
    }

    @include media_sm {
      grid-template-columns: 1fr;
      gap: 15px;
    }

    .selection__item {
      cursor: pointer;
      @include size(100%, auto);
      @include flex(column, start, start, 15px);

      .selection__img {
        @include size(100%, 180px);
        border-radius: 10px;
        object-fit: cover;
        object-position: center;
      }

      .selection__title {
        @extend %roboto-slab-bold;
        @include text(1rem, 1.5625rem, $color-dark, left);
      }

      .selection__info {
        @include flex(row, start, center, 10px);
      }
    }
  }
}
</style>
