<script>
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      slideIndex: (state) => state.carousel.slideIndex
    }),
    ...mapGetters({
      gallery: 'carousel/gallery'
    })
  },
  methods: {
    ...mapActions({
      prev: 'carousel/prev',
      next: 'carousel/next'
    })
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
      :style="{ width: gallery.length * 100 + '%', marginLeft: '-' + 100 * slideIndex + '%' }"
    >
      <li v-for="slide in gallery" :key="slide.id" class="carousel__item">
        <picture>
          <source :srcset="slide.img.big" media="(min-width: 1000px)" />
          <img class="carousel__image" :src="slide.img.small" :alt="slide.img.alt" />
        </picture>
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
  margin-block: 45px 30px;

  @include media_lg {
    width: 90%;
  }

  @include media_md {
    margin-bottom: 15px;
  }

  &-btn {
    position: absolute;
    top: 45%;
    opacity: 0.3;
    @include size(60px, 60px);
    transition:
      opacity 0.2s ease,
      scale 0.2s ease;
    cursor: pointer;

    @include media_md {
      @include size(50px, 50px);
    }

    @include media_sm {
      @include size(40px, 40px);
    }

    &:hover {
      opacity: 0.7;
      scale: 0.95;
    }

    &-prev {
      transform: translateY(-50%) rotate(180deg);
      left: 35px;

      @include media_md {
        left: 25px;
      }

      @include media_sm {
        left: 15px;
      }
    }

    &-next {
      transform: translateY(-50%);
      right: 35px;

      @include media_md {
        right: 25px;
      }

      @include media_sm {
        right: 15px;
      }
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

      @include media_lg {
        grid-template-rows: 450px auto;
      }

      @include media_md {
        grid-template-rows: 350px auto;
      }

      @include media_sm {
        grid-template-rows: 250px auto;
      }

      @include media_xs {
        grid-template-rows: 200px auto;
      }

      .carousel__image {
        @include size(100%, 100%);
        object-fit: cover;
        object-position: center;
      }

      .carousel__info {
        @include size(100%, auto);
        display: grid;
        grid-template-columns: auto max-content;
        align-items: center;

        .carousel__description {
          @include size(100%, auto);
          padding-inline: 35px;
          @extend %lato-regular;
          @include text(0.875rem, 1.25rem, $font-color-medium, left);

          @include media_md {
            display: none;
          }
        }

        .carousel__author {
          padding: 12px 30px;
          display: grid;
          grid-template-columns: 45px auto;
          column-gap: 10px;
          border-left: $border;

          @include media_smaller {
            padding-block: 6px;
          }

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
