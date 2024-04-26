<script>
import Comments from '@/components/UI/Comments.vue'
import OrdinaryArticle from '@/components/OrdinaryArticle.vue'
import AppAside from '@/components/Aside.vue'
import Sign from '@/components/UI/Sign.vue'
export default {
  props: {
    columnsContent: Array
  },
  components: {
    Comments,
    OrdinaryArticle,
    AppAside,
    Sign
  },
  data() {
    return {
      main: {},
      popular: {},
      asides: [],
      additional: {},
      rest: []
    }
  },
  watch: {
    columnsContent() {
      this.main = this.columnsContent.find((item) => item.tag === 'main')
      this.popular = this.columnsContent.find((item) => item.tag === 'popular')
      this.asides = this.columnsContent
        .filter((item) => item.tag === 'aside')
        .filter((i, index) => index < 3)
      this.additional = this.columnsContent.find((item) => item.tag === 'additional')
      this.rest = this.columnsContent.filter((item) => !item.tag).filter((i, index) => index < 4)
    }
  }
}
</script>

<template>
  <section v-if="columnsContent.length > 0" class="columns">
    <div class="columns__content">
      <article class="columns__content-item columns__content-main">
        <div class="columns__main-article">
          <router-link :to="main.link" class="columns__main-article-container">
            <p :style="{ color: main.themeColor }" class="columns__main-article-theme">
              {{ main.theme }}
            </p>
            <h3 class="columns__main-article-title">{{ main.title }}</h3>
            <p class="columns__main-article-description">{{ main.description }}</p>
          </router-link>
          <img
            class="columns__main-article-img"
            src="/columns/car.png"
            :alt="`${main.theme}'s image`"
          />
        </div>
        <div class="columns__main-author">
          <img
            :src="main.author.avatar"
            alt="Author's avatar"
            class="columns__main-author-avatar"
          />
          <p class="columns__main-author-text">
            <strong>{{ main.author.name }}:</strong> {{ main.author.quote }}
          </p>
          <comments type="comments" content="342"></comments>
        </div>
      </article>
      <article
        :style="{ backgroundImage: `url(${popular.img})` }"
        class="columns__content-item columns__content-popular"
      >
        <sign bgColor="#3dc47e">Popular</sign>
        <router-link :to="popular.link" class="columns__popular-content">
          <p :style="{ color: popular.themeColor }" class="columns__popular-content-theme">
            {{ popular.theme }}
          </p>
          <h3 class="columns__popular-content-title">{{ popular.title }}</h3>
          <div class="columns__popular-author">
            <img
              class="columns__popular-author-avatar"
              :src="popular.author.avatar"
              alt="Author's avatar"
            />
            <div class="columns__popular-author-info">
              <p class="columns__popular-author-name">By {{ popular.author.name }}</p>
              <div class="columns__popular-infobox">
                <p class="columns__popular-date">{{ popular.date }}</p>
                <comments type="comments" content="16"></comments>
                <comments type="likes" content="832"></comments>
              </div>
            </div>
          </div>
        </router-link>
      </article>
      <app-aside section="columns">
        <li
          v-for="column in asides"
          :key="column.id"
          :id="column.id"
          class="columns__aside-list-item"
        >
          <img class="columns__aside-quote" src="/quote.svg" alt="Image of quote" />
          <router-link :to="column.link" class="columns__aside-link">
            <h3 class="columns__aside-title">{{ column.title }}</h3>
            <div class="columns__aside-author">
              <img
                class="columns__aside-author-avatar"
                :src="column.author.avatar"
                alt="Authors's avatar"
              />
              <div class="columns__aside-author-info">
                <p class="columns__aside-author-name">{{ column.author.name }}</p>
                <p class="columns__aside-author-profession">{{ column.author.profession }}</p>
              </div>
            </div>
          </router-link>
        </li>
      </app-aside>
      <article class="columns__content-item columns__content-additional">
        <img
          class="columns__content-additional-img"
          :src="additional.img.link"
          :alt="additional.img.alt"
        />
        <router-link class="columns__content-additional-link" :to="additional.link"
          ><h3>{{ additional.title }}</h3></router-link
        >
      </article>
      <ordinary-article
        v-for="item in rest"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :description="item.description"
        :date="item.date"
        :link="item.link"
      ></ordinary-article>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/fonts/font.scss';
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';

.columns {
  @include size(100%, auto);
  background-color: $bg-color-light;
  padding-block: 30px 60px;

  @include media_sm {
    padding-block: 20px;
  }

  &__content {
    @include size(100%, auto);
    max-width: $big-screen-max-width;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, minmax(170px, max-content));
    gap: 30px;

    @include media_lg {
      width: 90%;
    }

    @include media_md {
      grid-template-columns: repeat(3, 1fr);
    }

    @include media_smaller {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(6, minmax(170px, max-content));
    }

    @include media_sm {
      @include flex(column, start, stretch, 10px);
    }

    &-item {
      border-radius: 10px;
    }

    &-main {
      grid-area: 1 / 1 / 3 / 3;
      @include flex(column, start, stretch, 0px);
      background-color: white;

      @include media_md {
        grid-area: 1 / 1 / 2 / 3;
      }

      @include media_smaller {
        grid-area: 1 / 1 / 2 / 3;
      }

      .columns__main-article {
        @include size(100%, 100%);
        margin-top: 15px;
        padding-left: 35px;
        @include flex(row, start, start, 0px);
        border-bottom: $border;

        @include media_xs {
          flex-direction: column;
          padding-left: 20px;
        }

        &-container {
          text-decoration: none;
          margin-block: 20px;
          @include flex(column, start, start, 20px);

          @include media_xs {
            margin-right: 15px;
          }

          .columns__main-article-theme {
            @extend %theme-font;
          }

          .columns__main-article-title {
            @extend %roboto-slab-bold;
            @include text(1.5625rem, 1.875rem, $color-dark, left);
            margin-bottom: 5px;
          }

          .columns__main-article-description {
            @extend %lato-regular;
            @include text(0.875rem, 1.25rem, $font-color-medium, left);
          }
        }

        &-img {
          @include size(52.6%, auto);
          align-self: center;

          @include media_xs {
            align-self: end;
          }
        }
      }

      .columns__main-author {
        padding: 12px 20px 13px 35px;
        @include size(100%, auto);
        @include flex(row, space-between, center, 10px);

        &-avatar {
          @include size(1.875rem, 1.875rem);
          border-radius: 50%;
        }

        &-text {
          @include size(100%, auto);
          margin-right: 5px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          @extend %lato-regular;
          @include text(0.875rem, 1.25rem, $font-color-medium, left);

          strong {
            @extend %lato-bold;
            color: $color-dark;
          }
        }
      }
    }

    &-popular {
      grid-area: 1 / 3 / 3 / 4;
      padding: 18px 35px 25px 25px;
      background-position: center;

      @include media_md {
        grid-area: 1 / 3 / 2 / 4;
      }

      @include media_smaller {
        grid-area: 2 / 1 / 3 / 2;
      }

      background-size: cover;
      background-repeat: no-repeat;
      @include flex(column, space-between, start, 15px);

      .columns__popular-content {
        @include size(100%, auto);
        @include flex(column, start, start, 10px);
        text-decoration: none;

        &-theme {
          @extend %theme-font;
        }

        &-title {
          text-transform: uppercase;
          @extend %roboto-slab-bold;
          @include text(1rem, 1.5625rem, white, left);
          margin-bottom: 5px;
        }

        .columns__popular-author {
          @include size(100%, auto);
          @include flex(row, start, center, 10px);

          &-avatar {
            @include size(45px, 45px);
            border-radius: 50%;
          }

          &-info {
            @include size(100%, auto);
            @include flex(column, start, start, 2px);

            .columns__popular-author-name {
              @extend %lato-regular;
              @include text(0.875rem, 1.25rem, rgba(white, 0.85), left);
            }

            .columns__popular-infobox {
              @include size(100%, auto);
              @include flex(row, start, center, 10px);

              .columns__popular-date {
                @extend %lato-regular;
                @include text(0.75rem, 0.9375rem, rgba(white, 0.4), left);
              }
            }
          }
        }
      }
    }

    .columns__aside-list-item {
      margin-top: 35px;
      padding-top: 10px;
      padding-left: 10px;
      padding-bottom: 39px;
      position: relative;
      @include flex(column, start, start, 15px);
      border-bottom: $light-border;

      &:last-of-type {
        border: none;
      }

      .columns__aside-quote {
        position: absolute;
        top: 0;
        left: 0;
        @include size(40px, 40px);
        z-index: 1;
      }

      .columns__aside-link {
        text-decoration: none;
        @include flex(column, start, start, 15px);

        .columns__aside-title {
          z-index: 2;
          @extend %roboto-slab-bold;
          @include text(1.25rem, 1.5625rem, white, left);
        }

        .columns__aside-author {
          z-index: 2;
          @include size(100%, auto);
          @include flex(row, start, center, 10px);

          &-avatar {
            @include size(45px, 45px);
            border-radius: 50%;
          }

          &-info {
            @include size(100%, auto);
            @include flex(column, start, start, 2px);

            .columns__aside-author-name {
              @extend %lato-regular;
              @include text(0.875rem, 1.25rem, $font-color-extralight, left);
            }

            .columns__aside-author-profession {
              @extend %lato-regular;
              @include text(0.75rem, 0.9375rem, $font-color-extralight, left);
            }
          }
        }
      }
    }

    &-additional {
      grid-area: 3 / 1 / 5 / 2;
      background-color: white;
      @include flex(column, start, start, 0px);
      overflow: hidden;

      @include media_md {
        grid-area: 2 / 2 / 4 / 3;
      }

      @include media_smaller {
        grid-area: 3 / 1 / 5 / 2;
      }

      @include media_sm {
        display: grid;
        grid-template-columns: 33% auto;
      }

      &-img {
        @include size(100%, auto);
        object-position: center;
        object-fit: cover;

        @include media_sm {
          height: 100%;
        }
      }

      &-link {
        text-decoration: none;
        padding: 15px 25px 30px;
        @extend %roboto-slab-bold;
        @include text(1rem, 1.5625rem, $color-dark, left);
      }
    }
  }
}
</style>
