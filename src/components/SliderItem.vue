<script>
import { mapMutations } from 'vuex'
import router from '@/router'
import AppButton from '@/components/UI/Button.vue'
import Sign from '@/components/UI/Sign.vue'
export default {
  components: {
    AppButton,
    Sign
  },
  props: {
    img: String,
    title: String,
    authorName: String,
    authorProfession: String,
    authorAvatar: String,
    photos: String,
    link: String,
    index: Number
  },
  data() {
    return {
      router
    }
  },
  methods: {
    ...mapMutations({
      setSlideWidth: 'slider/setSlideWidth'
    })
  },
  mounted() {
    if (this.index === 0) {
      this.setSlideWidth(document.querySelector('.slide').offsetWidth)
    }
  }
}
</script>

<template>
  <li :style="{ backgroundImage: `url(${img})` }" class="slide">
    <sign class="slide__sign" bgColor="#ff4f52">Hot</sign>
    <img class="slide__avatar" :src="authorAvatar" alt="Author's avatar" />
    <p class="slide__name">{{ authorName }}</p>
    <p class="slide__profession">{{ authorProfession }}</p>
    <h3 class="slide__title">{{ title }}</h3>
    <app-button @click="() => router.push(link)" class="slide__btn"
      ><img src="/pics.svg" alt="Icon of photos" />
      <p>Watch photos</p>
      <span>{{ photos }}</span></app-button
    >
  </li>
</template>

<style lang="scss" scoped>
@import '@/assets/fonts/font.scss';
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';

.slide {
  @include size(inherit, inherit);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 50px;
  @include flex(column, start, center, 0px);
  position: relative;

  @include media_md {
    padding-bottom: 100px;
  }

  &__sign {
    position: absolute;
    top: 18px;
    left: 18px;
  }

  &__avatar {
    border-radius: 50%;
    @include size(45px, 45px);
  }

  &__name {
    margin-block: 8px 2px;
    @extend %lato-regular;
    @include text(0.875rem, 1.25rem, rgba(white, 0.85), center);
  }

  &__profession {
    @extend %lato-regular;
    @include text(0.75rem, 0.9375rem, rgba(white, 0.4), center);
  }

  &__title {
    margin-block: 30px 25px;
    @extend %roboto-slab-bold;
    @include text(2.5rem, 3.125rem, white, center);

    @include media_smaller {
      font-size: 1.5rem;
      line-height: 2.125rem;
    }
  }

  &__btn {
    @include flex(row, start, center, 5px);

    img {
      margin-right: 5px;
      @include size(19px, 15px);
    }

    span {
      color: #c5e4fc;
    }
  }
}
</style>
