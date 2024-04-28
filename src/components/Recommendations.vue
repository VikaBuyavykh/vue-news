<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
import AppButton from '@/components/UI/Button.vue'
import router from '@/router'
export default {
  components: {
    AppButton
  },
  data() {
    return {
      router
    }
  },
  computed: {
    ...mapState({
      recommendations: (state) => state.articles.recommendations
    }),
    ...mapGetters({
      selectedRecommendation: 'articles/selectedRecommendation'
    })
  },
  methods: {
    ...mapMutations({
      selectRecommendation: 'articles/selectRecommendation'
    })
  }
}
</script>

<template>
  <section v-if="recommendations.length > 0" class="recommendations">
    <div class="recommendations__content">
      <div
        :style="{ backgroundImage: `url(${selectedRecommendation.img})` }"
        class="recommendations__active-item"
      >
        <div class="recommendations__overlay"></div>
        <div class="recommendations__author">
          <img
            :src="selectedRecommendation.author.avatar"
            alt="Author's avatar"
            class="recommendations__author-img"
          />
          <div class="recommendations__author-info">
            <p class="recommendations__author-name">By {{ selectedRecommendation.author.name }}</p>
            <p class="recommendations__author-profession">
              {{ selectedRecommendation.author.profession }}
            </p>
          </div>
        </div>
        <div class="recommendations__article-group">
          <p
            :style="{ color: selectedRecommendation.themeColor }"
            class="recommendations__article-theme"
          >
            {{ selectedRecommendation.theme }}
          </p>
          <h3 class="recommendations__article-title">
            {{ selectedRecommendation.title }}
          </h3>
          <div class="recommendations__btn-section">
            <app-button
              style="margin-top: 0"
              @click="() => router.push(selectedRecommendation.link)"
              class="more-btn"
              >Read more <img class="gallery__btn-img" src="/arrow.svg" alt="Icon of arrow"
            /></app-button>
            <div v-if="selectedRecommendation.video" class="recommendations__video-btn-group">
              <a
                class="recommendations__video-btn"
                target="_blank"
                :href="selectedRecommendation.video.link"
                ><img src="/play.svg" alt="Icon of a play"
              /></a>
              <div class="recommendations__video-btn-text-box">
                <p class="recommendations__video-btn-text">
                  {{ selectedRecommendation.video.title }}
                </p>
                <span class="recommendations__video-btn-duration">{{
                  selectedRecommendation.video.duration
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul class="recommendations__list">
        <li class="recommendations__list-item">Recommended for you</li>
        <li
          v-for="recommendation in recommendations"
          @click="selectRecommendation"
          :key="recommendation.id"
          :id="recommendation.id"
          class="recommendations__list-item"
          :class="{ 'recommendations__list-item_selected': recommendation.isSelected }"
        >
          <h4
            :style="{ color: recommendation.themeColor }"
            class="recommendations__list-item-theme"
          >
            {{ recommendation.theme }}
          </h4>
          <p class="recommendations__list-item-title">
            {{ recommendation.title }}
            <img
              v-if="recommendation.video"
              style="vertical-align: text-bottom"
              src="/play-small.svg"
              alt="Icon of having a video-link"
            />
          </p>
          <img
            v-if="recommendation.isSelected"
            src="/pointer.svg"
            alt="Icon of the pointer"
            class="recommendations__list-item-pointer"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/fonts/font.scss';
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';

.recommendations {
  @include size(100%, auto);
  background: linear-gradient($color-dark 50%, $bg-color-light 50%);

  @include media_md {
    background: linear-gradient($color-dark 33%, $bg-color-light 33%);
  }

  &__content {
    @include size(100%, auto);
    max-width: $big-screen-max-width;
    margin: 0 auto;
    border-radius: 10px;
    overflow: hidden;
    display: grid;
    grid-template-columns: auto 263px;

    @include media_lg {
      width: 90%;
    }

    @include media_md {
      grid-template-columns: 1fr;
    }

    .recommendations__active-item {
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      padding: 55px 55px 95px;
      @include flex(column, space-between, start, 45px);
      position: relative;

      @include media_smaller {
        padding: 40px 40px 60px;
      }

      @include media_sm {
        padding: 20px 20px 40px;
      }

      .recommendations__overlay {
        position: absolute;
        inset: 0;
        background-color: rgba(black, 0.4);
        z-index: 1;
      }

      .recommendations__author {
        @include flex(row, start, center, 10px);
        z-index: 2;

        &-img {
          border-radius: 50%;
          @include size(2.8125rem, 2.8125rem);
        }

        &-info {
          @include flex(column, start, start, 2px);
          @extend %lato-regular;

          .recommendations__author-name {
            @include text(0.875rem, 1.25rem, rgba(white, 0.85), left);
          }

          .recommendations__author-profession {
            @include text(0.75rem, 0.9375rem, rgba(white, 0.4), left);
          }
        }
      }

      .recommendations__article-group {
        @include size(90%, auto);
        @include flex(column, start, start, 18px);
        z-index: 2;

        .recommendations__article-theme {
          @extend %theme-font;
        }

        .recommendations__article-title {
          margin-top: 7px;
          @extend %roboto-slab-bold;
          @include text(2.5rem, 3.125rem, white, left);

          @include media_sm {
            @include text(1.875rem, 2.5rem, white, left);
          }
        }

        .recommendations__btn-section {
          margin-top: 20px;
          @include flex(row, start, center, 30px);

          @include media_smaller {
            @include flex(column-reverse, start, start, 20px);
          }

          .recommendations__video-btn-group {
            @include flex(row, start, center, 10px);

            .recommendations__video-btn {
              @include size(50px, 50px);
              cursor: pointer;
            }

            .recommendations__video-btn-text-box {
              @include flex(column, start, start, 2px);

              .recommendations__video-btn-text {
                @extend %lato-regular;
                @include text(0.875rem, 1.25rem, rgba(white, 0.85), left);
              }

              .recommendations__video-btn-duration {
                @extend %lato-regular;
                @include text(0.75rem, 0.9375rem, rgba(white, 0.4), left);
              }
            }
          }
        }
      }
    }

    .recommendations__list {
      max-width: 263px;
      list-style-type: none;
      @include flex(column, start, start, 0px);

      @include media_md {
        max-width: unset;
        width: 100%;
      }

      background-color: white;

      &-item {
        @include size(100%, auto);
        padding: 17px 25px 19px;
        border-bottom: $border;
        @include flex(column, start, start, 8px);
        @extend %lato-bold;
        @include text(0.875rem, 1.25rem, $color-dark, left);
        text-transform: uppercase;
        position: relative;

        &:has(h4) {
          cursor: pointer;

          &:hover .recommendations__list-item-title {
            color: darken($color-dark, 1);
          }
        }

        &:last-of-type {
          border: none;
          padding-bottom: 29px;
        }

        &_selected {
          background-color: #f5f5f5;
        }

        &-theme {
          @extend %theme-font;
        }

        &-title {
          text-transform: none;
          @extend %lato-regular;
          @include text(0.875rem, 1.25rem, $font-color-medium, left);
        }

        &-pointer {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: -12px;
          z-index: 2;

          @include media_md {
            display: none;
          }
        }
      }
    }
  }
}
</style>
