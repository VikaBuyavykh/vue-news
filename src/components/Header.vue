<script>
import axios from 'axios'
import NavBar from './NavBar.vue'
import links from '@/utils/links'
export default {
  components: {
    NavBar
  },
  data() {
    return {
      links,
      searchQuery: '',
      date: '',
      isLoginHovered: false,
      isSearchHovered: false,
      isMenuHovered: false,
      temp: null,
      weatherIcon: null,
      isSectionsVisible: true
    }
  },
  methods: {
    hoverLogin() {
      !this.isLoginHovered ? (this.isLoginHovered = true) : (this.isLoginHovered = false)
    },
    hoverSearch() {
      !this.isSearchHovered ? (this.isSearchHovered = true) : (this.isSearchHovered = false)
    },
    hoverMenu() {
      !this.isMenuHovered ? (this.isMenuHovered = true) : (this.isMenuHovered = false)
    },
    async getWeather() {
      try {
        const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
          params: {
            q: 'Moscow',
            units: 'metric',
            appid: 'b463ca9aaa0838203592e4617935e4ca'
          }
        })
        this.temp = Math.round(data.main.temp)
        this.weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      } catch (error) {
        console.log(error)
      }
    },
    changeSectionsVisibility() {
      this.isSectionsVisible = !this.isSectionsVisible
    }
  },
  mounted() {
    const newDate = new Date()
    this.date = newDate.toLocaleString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
    this.getWeather()
  }
}
</script>

<template>
  <header class="header">
    <div class="header__search-section">
      <div
        @click="changeSectionsVisibility"
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
          v-model="searchQuery"
        />
      </form>
      <div class="header__subscribe-group">
        <img src="/subscribe-img.png" alt="Image of editorial page" class="header__subscribe-img" />
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
        <img src="/statue.png" alt="The Statue of Liberty" class="header__main-img" />
        <p class="header__about-text">Boston and New York Bear Brunt</p>
      </div>
      <img src="/title.svg" alt="Name of the Media" class="header__title" />
      <div class="header__info-group">
        <p class="header__date">{{ date }}</p>
        <div class="header__weather-group">
          <img :src="weatherIcon" alt="Thw weather icon" class="header__weather-icon" />
          <p class="header__weather-text">{{ temp }} °C</p>
        </div>
      </div>
    </div>
    <Transition>
      <nav-bar v-if="isSectionsVisible" :links="links" place="header"></nav-bar>
    </Transition>
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
    @include size(100%, 3.125rem);
    max-width: $big-screen-max-width;
    margin: 0 auto;
    @include flex(row, space-between, center, 25px);
    border-bottom: $border;

    @include media_lg {
      width: 90%;
    }

    .header__menu-group {
      @include size(auto, 100%);
      padding-right: 25px;
      border-right: $border;
      @include flex(row, space-between, center, 15px);
      cursor: pointer;

      .header__menu-btn {
        @include size(1.25rem, 1.25rem);
      }

      .header__menu-text {
        @extend %lato-bold;
        @include text(0.875rem, 1.25rem, $color-dark, left);
      }
    }

    .header__search-form {
      @include flex(row, start, center, 10px);
      flex-grow: 1;

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

      .header__subscribe-img {
        @include size(4.125rem, 2.75rem);
        align-self: end;
      }

      .header__subscribe-paragraph {
        @include size(7.4375rem, auto);
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

      .header__login-btn {
        @include size(1.25rem, 1.25rem);
        cursor: pointer;
      }

      .header__login-text {
        @extend %lato-regular;
        @include text(0.875rem, 1.25rem, $font-color-medium, left);
      }
    }
  }

  &__main-section {
    @include size(100%, auto);
    max-width: $big-screen-max-width;
    margin: 0 auto;
    @include flex(row, space-between, center, 10px);

    .header__about-group {
      @include flex(row, start, center, 15px);
      margin-left: 2rem;

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
      margin-right: 6%;
    }

    .header__info-group {
      @include flex(row, start, center, 68px);

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
