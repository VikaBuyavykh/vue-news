<script>
export default {
  data() {
    return {
      searchQuery: ''
    }
  }
}
</script>

<template>
  <header class="header">
    <div class="header__search-section">
      <div class="header__menu-group">
        <img src="/menu.svg" alt="Icon of menu" class="header__menu-btn" />
        <p class="header__menu-text">Sections</p>
      </div>
      <form class="header__search-form">
        <img src="/loupe.svg" alt="Icon of search" class="header__search-btn" />
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
      <div class="header__login-group">
        <img src="/login.svg" alt="Icon of login page" class="header__login-btn" />
        <p class="header__login-text">Sign In</p>
      </div>
    </div>
    <div class="header__main-section"></div>
    <div class="header__navbar"></div>
  </header>
</template>

<style lang="scss" scoped>
@import '@/assets/fonts/font.scss';
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';

.header {
  @include size(100%, auto);
  max-width: $big-screen-max-width;
  @include flex(column, start, stretch, 0px);

  &__search-section {
    @include size(100%, 3.125rem);
    @include flex(row, space-between, center, 25px);
    border-bottom: $border;

    .header__menu-group {
      @include size(auto, 100%);
      padding-right: 25px;
      border-right: $border;
      @include flex(row, space-between, center, 15px);

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

      .header__login-btn {
        @include size(1.25rem, 1.25rem);
      }

      .header__login-text {
        @extend %lato-regular;
        @include text(0.875rem, 1.25rem, $font-color-medium, left);
      }
    }
  }
}
</style>
