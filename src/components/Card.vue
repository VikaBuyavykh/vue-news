<script>
export default {
  props: {
    avatar: String,
    name: String,
    profession: String,
    articles: String,
    fbLink: String,
    twitterLink: String,
    igLink: String,
    localLink: String
  }
}
</script>

<template>
  <div class="card">
    <div class="card__author">
      <img class="card__author-avatar" :src="avatar" alt="Author's avatar" />
      <h4 class="card__author-name">{{ name }}</h4>
      <p class="card__author-profession">{{ profession }}</p>
      <p class="card__author-articles">{{ articles }} articles</p>
      <ul class="card__author-socials">
        <li>
          <a :href="fbLink" target="_blank"><img src="/fb-pale.svg" alt="Icon of Facebook" /></a>
        </li>
        <li>
          <a :href="twitterLink" target="_blank"
            ><img src="/twitter-pale.svg" alt="Icon of Twitter"
          /></a>
        </li>
        <li>
          <a :href="igLink" target="_blank"><img src="/ig-pale.svg" alt="Icon of Instagram" /></a>
        </li>
      </ul>
    </div>
    <a class="card__link" :href="localLink" target="_blank">Follow on Universal</a>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/fonts/font.scss';
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';

.card {
  @include size(100%, fit-content);
  background-color: white;
  border: $border;
  border-radius: 20px;
  transform: translateY(-35%);
  @include flex(column, start, center, 0px);
  z-index: 3;

  @include media_md {
    transform: none;
    margin-top: 15px;
  }

  &__author {
    padding-block: 34px;
    @include size(90%, auto);
    @include flex(column, start, center, 5px);

    &-avatar {
      border-radius: 50%;
      @include size(90px, 90px);
      object-fit: cover;
      object-position: center;
    }

    &-name {
      margin-top: 10px;
      @extend %roboto-slab-bold;
      @include text(1.25rem, 1.5625rem, $color-dark, center);
    }

    &-profession {
      @extend %lato-regular;
      @include text(0.875rem, 1.25rem, $font-color-medium, center);
    }

    &-articles {
      margin-block: 10px 20px;
      @extend %lato-bold;
      @include text(0.875rem, 1.25rem, $color-dark, center);
    }

    &-socials {
      @include flex(row, center, center, 10px);
      list-style-type: none;

      img {
        border-radius: 50%;
        @include size(40px, 40px);
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          transform: translateY(-2px);
          box-shadow: 2px 2px 5px rgba(black, 0.3);
        }
      }
    }
  }

  &__link {
    @include size(100%, auto);
    padding: 12px 25px;
    border-top: $border;
    text-decoration: none;
    @extend %lato-bold;
    @include text(0.875rem, 1.25rem, $color-dark, center);
    transition: all 0.3s ease;

    &:hover {
      text-decoration: underline rgba(black, 0.5);
    }
  }
}
</style>
