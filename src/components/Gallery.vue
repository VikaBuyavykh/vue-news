<script>
import articles from '@/utils/articles'
import OrdinaryArticle from '@/components/OrdinaryArticle.vue'
import AppButton from '@/components/UI/Button.vue'
import SliderItem from '@/components/SliderItem.vue'
import SliderButtons from '@/components/UI/SliderButtons.vue'
import router from '@/router'
export default {
  components: {
    OrdinaryArticle,
    AppButton,
    SliderItem,
    SliderButtons
  },
  data() {
    const galleryArticles = articles.filter((item) => item.section === 'gallery')
    return {
      sliderItems: galleryArticles
        .filter((item) => item.tag === 'slider')
        .filter((i, index) => index < 5),
      main: galleryArticles.find((item) => item.tag === 'main'),
      rest: galleryArticles.filter((item) => !item.tag).filter((i, index) => index < 2),
      currentSlideIndex: 0,
      buttons: [
        { id: 1, isSelected: true },
        { id: 2, isSelected: false },
        { id: 3, isSelected: false },
        { id: 4, isSelected: false },
        { id: 5, isSelected: false }
      ],
      intervalId: '',
      posInit: 0,
      posFinal: 0,
      slideWidth: 0,
      posX: 0,
      isMousedown: false,
      router
    }
  },
  watch: {
    currentSlideIndex(value) {
      this.buttons = this.buttons.map((item) =>
        value !== item.id - 1 ? { ...item, isSelected: false } : { ...item, isSelected: true }
      )
    }
  },
  methods: {
    nextSlide() {
      if (this.currentSlideIndex + 1 < this.sliderItems.length) {
        this.currentSlideIndex++
      } else {
        this.currentSlideIndex = 0
      }
    },
    prevSlide() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--
      } else {
        this.currentSlideIndex = this.sliderItems.length - 1
      }
    },
    changeSlide(e) {
      this.currentSlideIndex = e.currentTarget.id - 1
      clearInterval(this.intervalId)
      this.intervalStart()
    },
    intervalStart: function () {
      const self = this
      this.intervalId = setInterval(() => {
        self.nextSlide()
      }, 5000)
    },
    start(e) {
      if (e.type === 'touchstart') {
        this.posInit = e.touches[0].clientX
      } else {
        this.posInit = e.clientX
      }
      this.isMousedown = true
      this.$refs.slider.style.cursor = 'grab'
      this.$refs.slider.style.transition = 'none'
    },
    end(e) {
      if (this.isMousedown) {
        if (e.type === 'touchend') {
          this.posFinal = e.changedTouches[0].clientX
        } else {
          this.posFinal = e.clientX
        }
        if (Math.abs(this.posInit - this.posFinal) > this.slideWidth * 0.35) {
          if (this.posInit - this.posFinal > 0) {
            this.nextSlide()
          } else {
            this.prevSlide()
          }
          clearInterval(this.intervalId)
          this.intervalStart()
        } else {
          this.$refs.slider.style.marginLeft = `${this.currentSlideIndex * this.slideWidth * -1}px`
        }
      }
      this.isMousedown = false
      this.$refs.slider.style.cursor = 'pointer'
      this.$refs.slider.style.transition = 'all 1s ease'
    },
    move(e) {
      if (this.isMousedown) {
        this.$refs.slider.style.transition = 'none'
        if (e.type === 'touchmove') {
          this.posX = this.posInit - e.touches[0].clientX
        } else {
          this.posX = this.posInit - e.clientX
        }
        if (
          (this.currentSlideIndex === 0 && this.posX < 0) ||
          (this.currentSlideIndex === this.sliderItems.length - 1 && this.posX > 0)
        ) {
          return
        } else {
          this.$refs.slider.style.marginLeft = `${this.posX * -1 + this.currentSlideIndex * this.slideWidth * -1}px`
        }
      }
    }
  },
  mounted() {
    this.intervalStart()
    this.slideWidth = document.querySelector('.slide').offsetWidth
  },
  unmounted() {
    clearInterval(this.intervalStart)
  }
}
</script>

<template>
  <section class="gallery">
    <div class="gallery__content">
      <article class="gallery__article gallery__slider">
        <ul
          ref="slider"
          :style="{
            marginLeft: '-' + 100 * currentSlideIndex + '%',
            width: sliderItems.length * 100 + '%'
          }"
          class="gallery__slider-content"
        >
          <slider-item
            @mousemove="move"
            @touchmove="move"
            @mousedown="start"
            @touchstart="start"
            @mouseup="end"
            @touchend="end"
            @mouseleave="end"
            @touchleave="end"
            v-for="item in sliderItems"
            :key="item.id"
            :id="item.id"
            :img="item.img"
            :title="item.title"
            :authorName="item.author.name"
            :authorProfession="item.author.profession"
            :authorAvatar="item.author.avatar"
            :photos="item.photos"
            :link="item.link"
          ></slider-item>
          <slider-buttons :buttons="buttons" :changeSlide="changeSlide"></slider-buttons>
        </ul>
      </article>
      <article class="gallery__article gallery__main">
        <div class="gallery__main-content">
          <p :style="{ color: main.themeColor }" class="gallery__main-content-theme">
            {{ main.theme }}
          </p>
          <h3 class="gallery__main-content-title">{{ main.title }}</h3>
          <p class="gallery__main-content-description">{{ main.description }}</p>
          <app-button @click="() => router.push(main.link)" class="gallery__btn more-btn"
            >Read more <img class="gallery__btn-img" src="/arrow.svg" alt="Icon of arrow"
          /></app-button>
        </div>
        <div class="gallery__circle"></div>
        <img class="gallery__img" src="/gallery/girl.png" alt="Illustration" />
      </article>
      <ordinary-article
        v-for="article in rest"
        :key="article.id"
        :id="article.id"
        :title="article.title"
        :description="article.description"
        :date="article.date"
        :link="article.link"
      ></ordinary-article>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/fonts/font.scss';
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';

.gallery {
  @include size(100%, auto);
  background-color: $color-dark;
  padding-block: 60px;

  &__content {
    margin: 0 auto;
    @include size(100%, auto);
    max-width: $big-screen-max-width;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 30px;

    .gallery__article {
      background-color: white;
      border-radius: 10px;
    }

    .gallery__slider {
      grid-area: 1 / 1 / 4 / 3;
      overflow: hidden;
      position: relative;

      &-content {
        list-style-type: none;
        @include size(100%, 100%);
        display: flex;
        transition: all 1s ease;
        user-select: none;
        cursor: pointer;
      }
    }

    .gallery__main {
      grid-area: 1 / 3 / 3 / 5;
      background-color: $accent-skyblue;
      padding: 35px 30px 50px 35px;
      position: relative;

      &-content {
        @include size(55%, 100%);
        @include flex(column, start, start, 5px);

        &-theme {
          @extend %theme-font;
          z-index: 2;
        }

        &-title {
          @extend %roboto-slab-bold;
          margin-block: 15px 10px;
          @include text(1.5625rem, 1.875rem, $color-dark, left);
          z-index: 2;
        }

        &-description {
          @extend %lato-regular;
          @include text(0.875rem, 1.25rem, $font-color-medium, left);
          z-index: 2;
        }

        .gallery__btn {
          z-index: 2;
        }
      }

      .gallery__circle {
        @include size(260px, 260px);
        position: absolute;
        top: 50%;
        transform: translateY(-46%);
        right: 30px;
        background-color: $font-color-extralight;
        border-radius: 50%;
        z-index: 0;
      }

      .gallery__img {
        @include size(248px, auto);
        position: absolute;
        bottom: 0;
        right: 10%;
        z-index: 1;
      }
    }
  }
}
</style>
