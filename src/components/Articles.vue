<script>
export default {}
</script>

<template>
  <section class="articles">
    <ul class="articles__list">
      <li class="articles__list-item">
        <p class="articles__text">25 Songs That Tell Us Where Music Is Going</p>
        <img src="/articles/guitar.png" alt="Illustration of a guitar" class="articles__img" />
      </li>
      <li class="articles__list-item">
        <p class="articles__text">These Ancient Assassins Eat Their Own Kind</p>
        <img
          src="/articles/butterfly.png"
          alt="Illustration of a butterfly"
          class="articles__img"
        />
      </li>
      <li class="articles__list-item">
        <p class="articles__text">How Do You Teach People to Love Difficult Music?</p>
        <img src="/articles/man.png" alt="Illustration of a man" class="articles__img" />
      </li>
      <li class="articles__list-item">
        <p class="articles__text">International Soccer’s Man of Mystery</p>
        <img src="/articles/stadium.png" alt="Illustration of a stadium" class="articles__img" />
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/fonts/font.scss';
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';

.articles {
  @include size(100%, auto);
  background-color: $color-dark;
  padding-block: 30px;

  &__list {
    @include size(100%, auto);
    max-width: $big-screen-max-width;
    margin: 0 auto;
    padding-block: 25px 30px;
    border-radius: 10px;
    @include flex(row, space-between, center, 0px);
    background-color: $bg-color-halfdark;
    list-style-type: none;

    &-item {
      padding-inline: 25px;
      border-right: $border;
      @include flex(row, space-between, center, 15px);

      &:last-of-type {
        border: none;
      }

      .articles__text {
        @extend %roboto-slab-bold;
        @include text(1rem, 1.5625rem, white, left);
      }

      .articles__img {
        @include size(4.0625rem, 4.0625rem);
      }
    }
  }
}
</style>
