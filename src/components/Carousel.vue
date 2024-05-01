<script>
export default {
  data() {
    return {
      slides: [
        {
          id: 1,
          img: '/article/mountines.jpg',
          text: 'Geostatistics deal with quantitative data analysis, specifically the application of statistical methodology',
          author: {
            avatar: '/authors/photographer2.png',
            name: 'Andrew Washington',
            profession: 'Photographer'
          }
        },
        {
          id: 2,
          img: '/article/moto.png',
          text: 'Geostatistics deal with quantitative data analysis, specifically the application of statistical methodology',
          author: {
            avatar: '/authors/supermodel.jpg',
            name: 'Vika Buyavykh',
            profession: 'Frontend Dev'
          }
        },
        {
          id: 3,
          img: '/article/mountines.jpg',
          text: 'Geostatistics deal with quantitative data analysis, specifically the application of statistical methodology',
          author: {
            avatar: '/authors/photographer2.png',
            name: 'Andrew Washington',
            profession: 'Photographer'
          }
        },
        {
          id: 4,
          img: '/article/moto.png',
          text: 'Geostatistics deal with quantitative data analysis, specifically the application of statistical methodology',
          author: {
            avatar: '/authors/supermodel.jpg',
            name: 'Vika Buyavykh',
            profession: 'Frontend Dev'
          }
        }
      ],
      slideIndex: 0
    }
  },
  methods: {
    next() {
      if (this.slideIndex === this.slides.length - 1) {
        this.slideIndex = 0
      } else {
        this.slideIndex++
      }
    },
    prev() {
      if (this.slideIndex === 0) {
        this.slideIndex = this.slides.length - 1
      } else {
        this.slideIndex--
      }
    }
  }
}
</script>

<template>
  <div class="carousel">
    <img
      @click="prev"
      class="carousel-btn carousel-btn-prev"
      src="/circle-arrow.svg"
      alt="Icon of the prev slide"
    />
    <img
      @click="next"
      class="carousel-btn carousel-btn-next"
      src="/circle-arrow.svg"
      alt="Icon of the next slide"
    />
    <ul
      class="carousel__content"
      :style="{ width: slides.length * 100 + '%', marginLeft: '-' + 100 * slideIndex + '%' }"
    >
      <li v-for="slide in slides" :key="slide.id" class="carousel__item">
        <img class="carousel__image" :src="slide.img" alt="Image" />
        <div class="carousel__info">
          <p class="carousel__description">{{ slide.text }}</p>
          <div class="carousel__author">
            <img
              class="carousel__author-avatar"
              :src="slide.author.avatar"
              :alt="`The avatar of ${slide.author.name}`"
            />
            <div class="carousel__author-info">
              <p class="carousel__author-name">{{ slide.author.name }}</p>
              <p class="carousel__author-profession">{{ slide.author.profession }}</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/fonts/font.scss';
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';

.carousel {
  @include size(100%, auto);
  max-width: $big-screen-max-width;
  border-radius: 20px;
  border: $border;
  overflow: hidden;
  position: relative;
  margin-bottom: 30px;

  &-btn {
    position: absolute;
    top: 50%;

    opacity: 0.3;
    @include size(60px, 60px);
    transition:
      opacity 0.2s ease,
      scale 0.2s ease;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
      scale: 0.95;
    }

    &-prev {
      transform: translateY(-50%) rotate(180deg);
      left: 35px;
    }

    &-next {
      transform: translateY(-50%);
      right: 35px;
    }
  }

  &__content {
    list-style-type: none;
    display: flex;
    transition: all 1s ease;

    .carousel__item {
      @include size(100%, 100%);
      display: grid;
      grid-template-rows: 555px auto;

      .carousel__image {
        @include size(100%, 100%);
        object-fit: cover;
        object-position: center;
      }

      .carousel__info {
        @include size(100%, auto);
        display: grid;
        grid-template-columns: auto 23%;
        align-items: center;

        .carousel__description {
          @include size(100%, auto);
          padding-inline: 35px;
          @extend %lato-regular;
          @include text(0.875rem, 1.25rem, $font-color-medium, left);
        }

        .carousel__author {
          padding: 12px 30px;
          display: grid;
          grid-template-columns: 45px auto;
          column-gap: 10px;
          border-left: $border;

          &-avatar {
            border-radius: 50%;
            @include size(auto, 45px);
            object-fit: cover;
            object-position: center;
          }

          &-info {
            @include flex(column, center, start, 2px);

            .carousel__author-name {
              @extend %lato-regular;
              @include text(0.875rem, 1.25rem, $font-color-medium, left);
            }

            .carousel__author-profession {
              @extend %lato-regular;
              @include text(0.75rem, 0.9375rem, $font-color-light, left);
            }
          }
        }
      }
    }
  }
}
</style>