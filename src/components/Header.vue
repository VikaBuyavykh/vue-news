<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import NavBar from '@/components/NavBar.vue'
import links from '@/utils/links'
import Popup from '@/components/Popup.vue'
export default {
  components: {
    NavBar,
    Popup
  },
  data() {
    return {
      links
    }
  },
  computed: {
    ...mapState({
      isLoginHovered: (state) => state.header.isLoginHovered,
      isSearchHovered: (state) => state.header.isSearchHovered,
      isMenuHovered: (state) => state.header.isMenuHovered,
      date: (state) => state.header.date,
      temp: (state) => state.header.temp,
      weatherIcon: (state) => state.header.weatherIcon,
      searchQuery: (state) => state.header.searchQuery,
      isSectionsVisible: (state) => state.header.isSectionsVisible,
      isPopupVisible: (state) => state.header.isPopupVisible
    })
  },
  methods: {
    ...mapMutations({
      hoverLogin: 'header/hoverLogin',
      hoverSearch: 'header/hoverSearch',
      hoverMenu: 'header/hoverMenu',
      setDate: 'header/setDate',
      setSearchQuery: 'header/setSearchQuery',
      changeSectionsVisibility: 'header/changeSectionsVisibility',
      changePopupVisibility: 'header/changePopupVisibility'
    }),
    ...mapActions({
      getWeather: 'header/getWeather'
    }),
    onSectionsClick() {
      window.innerWidth <= 1000 ? this.changePopupVisibility() : this.changeSectionsVisibility()
    }
  },
  mounted() {
    const newDate = new Date()
    this.setDate(
      newDate.toLocaleString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      })
    )
    this.getWeather()
  },
  watch: {
    isPopupVisible() {
      if (this.isPopupVisible && this.isSectionsVisible) {
        this.changeSectionsVisibility()
      }
    }
  }
}
</script>

<template>
  <header class="header">
    <div class="header__search-section">
      <div
        @click="onSectionsClick"
        @mouseenter="hoverMenu"
        @mouseleave="hoverMenu"
        class="header__menu-group"
      >
        <img
          :src="isMenuHovered ? '/menu-active.svg' : '/menu.svg'"
          alt="Icon of menu"
          class="header__menu-btn"
        />
        <p class="header__menu-text">Sections</p>
      </div>
      <form class="header__search-form">
        <img
          @mouseenter="hoverSearch"
          @mouseleave="hoverSearch"
          :src="isSearchHovered ? '/loupe-active.svg' : '/loupe.svg'"
          alt="Icon of search"
          class="header__search-btn"
        />
        <input
          type="search"
          name="search"
          id="search"
          class="header__search-field"
          placeholder="Search"
          :value="searchQuery"
          @input="setSearchQuery"
        />
      </form>
      <div class="header__subscribe-group">
        <picture>
          <source srcset="/subscribe-img(2).png" media="(min-width: 1000px)" />
          <img
            src="/subscribe-img.png"
            alt="Image of editorial page"
            class="header__subscribe-img"
          />
        </picture>
        <div class="header__subscribe-paragraph">
          <b class="header__subscribe-text">Subscribe Now</b>
          <p class="header__subscribe-price">3 month for $19</p>
        </div>
      </div>
      <div @mouseenter="hoverLogin" @mouseleave="hoverLogin" class="header__login-group">
        <img
          :src="isLoginHovered ? '/login-active.svg' : '/login.svg'"
          alt="Icon of login page"
          class="header__login-btn"
        />
        <p class="header__login-text">Sign In</p>
      </div>
    </div>
    <div class="header__main-section">
      <div class="header__about-group">
        <picture>
          <source srcset="/statue(2).png" media="(min-width: 1000px)" />
          <img src="/statue.png" alt="The Statue of Liberty" class="header__main-img" />
        </picture>
        <p class="header__about-text">Boston and New York Bear Brunt</p>
      </div>
      <img src="/title.svg" alt="Name of the Media" class="header__title" />
      <div class="header__info-group">
        <p class="header__date">{{ date }}</p>
        <div v-if="weatherIcon && temp" class="header__weather-group">
          <img :src="weatherIcon" alt="Thw weather icon" class="header__weather-icon" />
          <p class="header__weather-text">{{ temp }} °C</p>
        </div>
      </div>
    </div>
    <Transition>
      <nav-bar v-if="isSectionsVisible" :links="links" place="header"></nav-bar>
    </Transition>
    <popup :changePopupVisibility="changePopupVisibility" v-if="isPopupVisible">
      <nav-bar :links="links" place="header-popup"></nav-bar>
    </popup>
  </header>
</template>

<style lang="scss" scoped>
@import '@/assets/fonts/font.scss';
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';

.v-enter-active {
  transition: all 1s ease-out;
}
.v-leave-active {
  transition: all 0.15s cubic-bezier(1, 0.5, 0.8, 1);
}
.v-enter-from {
  height: 0;
  transform: translateX(-50%);
  opacity: 0;
}
.v-leave-to {
  height: 0;
  transform: translateX(50%);
  opacity: 0;
}

.header {
  @include size(100%, auto);
  @include flex(column, start, stretch, 0px);

  &__search-section {
    @include size(100%, auto);
    max-width: $big-screen-max-width;
    margin: 0 auto;
    display: grid;
    grid-template-columns: auto 1fr auto auto;
    gap: 25px;
    border-bottom: $border;

    @include media_lg {
      width: 90%;
    }

    @include media_smaller {
      grid-template-columns: auto 1fr auto;
      grid-template-rows: repeat(2, 1fr);
      gap: 0;
    }

    .header__menu-group {
      @include size(auto, 100%);
      border-right: $border;
      padding-right: 25px;
      @include flex(row, space-between, center, 15px);
      cursor: pointer;

      @include media_smaller {
        border: none;
        justify-content: start;
      }

      @include media_sm {
        gap: 10px;
      }

      @include media_xs {
        padding-right: 10px;
      }

      .header__menu-btn {
        @include size(1.25rem, 1.25rem);

        @include media_sm {
          @include size(1rem, 1rem);
        }
      }

      .header__menu-text {
        @extend %lato-bold;
        @include text(0.875rem, 1.25rem, $color-dark, left);

        @include media_sm {
          font-size: 0.75rem;
          line-height: 1rem;
        }
      }
    }

    .header__search-form {
      @include flex(row, start, center, 10px);

      @include media_smaller {
        justify-content: center;
        grid-area: 1/1/2/4;
      }

      @include media_xs {
        grid-area: 1/1/2/3;
        gap: 5px;
      }

      .header__search-btn {
        @include size(1.25rem, 1.25rem);
        cursor: pointer;
      }

      .header__search-field {
        border: none;
        outline: none;
        @include size(80%, auto);
        @extend %lato-regular;
        @include text(0.875rem, 1.25rem, $color-dark, left);

        @include media_smaller {
          background-color: rgba($font-color-light, 0.1);
          border-radius: 10px;
          padding-inline: 15px;
        }

        @include media_xs {
          width: 100%;
        }

        &::placeholder {
          color: $font-color-light;
        }

        &::-webkit-search-cancel-button {
          display: none;
        }
      }
    }

    .header__subscribe-group {
      @include size(auto, 100%);
      @include flex(row, start, center, 10px);
      cursor: pointer;

      @include media_xs {
        flex-direction: row-reverse;
        justify-content: end;
        grid-area: 2/2/3/4;
      }

      .header__subscribe-img {
        margin-top: 3px;
        @include size(4.125rem, 2.75rem);
        align-self: end;

        @include media_smaller {
          margin: 0;
        }
      }

      .header__subscribe-paragraph {
        @include flex(column, center, start, 0px);

        .header__subscribe-text {
          @extend %lato-bold;
          @include text(0.75rem, 0.9375rem, $color-dark, left);
        }

        .header__subscribe-price {
          @extend %lato-regular;
          @include text(0.75rem, 0.9375rem, $font-color-light, left);
        }
      }
    }

    .header__login-group {
      @include flex(row, start, center, 10px);
      cursor: pointer;
      padding-left: 25px;

      @include media_smaller {
        justify-content: end;
      }

      @include media_xs {
        grid-area: 1/3/2/4;
        padding-left: 10px;
      }

      .header__login-btn {
        @include size(1.25rem, 1.25rem);
        cursor: pointer;

        @include media_sm {
          @include size(1rem, 1rem);
        }
      }

      .header__login-text {
        @extend %lato-regular;
        @include text(0.875rem, 1.25rem, $font-color-medium, left);

        @include media_sm {
          font-size: 0.75rem;
          line-height: 1rem;
        }
      }
    }
  }

  &__main-section {
    @include size(100%, auto);
    max-width: $big-screen-max-width;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @include media_lg {
      width: 90%;
    }

    @include media_smaller {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, minmax(min-content, max-content));
      column-gap: 40px;
    }

    @include media_xs {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(3, minmax(min-content, max-content));
    }

    .header__about-group {
      @include flex(row, start, center, 15px);
      margin-left: 32px;

      @include media_lg {
        margin: 0;
      }

      @include media_md {
        @include flex(column, center, start, 0px);
      }

      @include media_smaller {
        grid-area: 1/1/3/2;
      }

      @include media_xs {
        grid-area: 1/1/2/2;
      }

      .header__main-img {
        @include size(6.25rem, 5.25rem);
      }

      .header__about-text {
        @extend %lato-regular;
        @include text(0.875rem, 1.25rem, $font-color-medium, left);
      }
    }

    .header__title {
      @include size(11.5rem, 2.5rem);
      margin: auto;

      @include media_smaller {
        margin-right: 0;
      }

      @include media_xs {
        margin-left: 0;
      }
    }

    .header__info-group {
      @include flex(row, start, center, 68px);
      margin-left: auto;

      @include media_lg {
        gap: 20px;
      }

      @include media_md {
        @include flex(column-reverse, end, end, 0px);
      }

      @include media_smaller {
        grid-area: 1/2/2/3;
        @include flex(column, start, end, 0px);
        margin-top: 5px;
      }

      @include media_xs {
        grid-area: 3/1/4/2;
        @include flex(column, start, start, 0px);
        margin: 7px 0 0;
      }

      .header__date {
        @extend %lato-regular;
        @include text(0.875rem, 1.25rem, $font-color-medium, left);
      }

      .header__weather-group {
        @include flex(row, start, center, 10px);

        .header__weather-icon {
          @include size(2rem, 2rem);
        }

        .header__weather-text {
          @include text(0.875rem, 1.25rem, $font-color-medium, left);
        }
      }
    }
  }
}
</style>
