<script>
import articles from '@/utils/articles'
import AppButton from '@/components/UI/Button.vue'
export default {
  components: {
    AppButton
  },
  data() {
    const recommendations = articles.filter((item) => item.section === 'recommendations')
    return {
      recommendations: recommendations,
      selectedRecommendation: recommendations[0]
    }
  },
  methods: {
    selectRecommendation(e) {
      this.recommendations.map((item) =>
        item.id == e.currentTarget.id ? (item.isSelected = true) : (item.isSelected = false)
      )
    }
  },
  watch: {
    recommendations: {
      handler(value) {
        this.selectedRecommendation = value.find((item) => item.isSelected === true)
      },
      deep: true
    }
  }
}
</script>

<template>
  <section class="recommendations">
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
          <app-button text="Read more"></app-button>
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

  &__content {
    @include size(100%, auto);
    max-width: $big-screen-max-width;
    margin: 0 auto;
    border-radius: 10px;
    overflow: hidden;
    @include flex(row, start, stretch, 0px);

    .recommendations__active-item {
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      padding: 55px;
      @include flex(column, space-between, start, 45px);
      position: relative;

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
        @include flex(column, start, start, 25px);
        z-index: 2;

        .recommendations__article-theme {
          @extend %theme-font;
        }

        .recommendations__article-title {
          @extend %roboto-slab-bold;
          @include text(2.5rem, 3.125rem, white, left);
        }
      }
    }

    .recommendations__list {
      max-width: 263px;
      list-style-type: none;
      @include flex(column, start, start, 0px);

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
        }

        &:last-of-type {
          border: none;
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
        }
      }
    }
  }
}
</style>