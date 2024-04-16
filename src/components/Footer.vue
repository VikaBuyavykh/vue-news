<script>
import AppButton from '@/components/UI/Button.vue'
import sections from '@/utils/sections.js'
import NavBar from '@/components/NavBar.vue'
import contacts from '@/utils/contacts.js'
export default {
  components: {
    AppButton,
    NavBar
  },
  data() {
    return {
      sections,
      contacts
    }
  }
}
</script>

<template>
  <footer class="footer">
    <div class="footer__content">
      <h2 class="footer__title">Subscribe now and get 20% off</h2>
      <div class="footer__input-section">
        <input
          class="footer__input"
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        />
        <app-button style="margin: 0" text="Subscribe"></app-button>
      </div>
      <ul class="footer__nav-bar">
        <li v-for="section in sections" :key="section.name" class="footer__nav-bar-block">
          <h3 :style="{ borderTopColor: section.themeColor }" class="footer__nav-bar-title">
            {{ section.name }}
          </h3>
          <a
            class="footer__nav-bar-link"
            v-for="link in section.links"
            :key="link.name"
            :href="link.link"
            >{{ link.name }}</a
          >
        </li>
      </ul>
      <div class="footer__contacts">
        <img class="footer__logo" src="/logo.svg" alt="Logo" />
        <nav-bar :links="contacts" place="footer"></nav-bar>
        <div class="footer__socials">
          <a class="footer__socials-link" href="#"><img src="/fb.svg" alt="Facebook icon" /></a>
          <a class="footer__socials-link" href="#"><img src="/twitter.svg" alt="Twitter icon" /></a>
          <a class="footer__socials-link" href="#"><img src="/yt.svg" alt="Youtube icon" /></a>
          <a class="footer__socials-link" href="#"><img src="/ig.svg" alt="Instagram icon" /></a>
        </div>
      </div>
      <div class="footer__additional">
        <p class="footer__additional-info footer__additional-info_not-copyright">
          Universal’s business concept is to offer fashion and quality at the best price in a
          sustainable way. Universal has since it was founded in 2015 grown into one of the world's
          leading fashion companies.
        </p>
        <p class="footer__additional-info">© 2019 Universal UI Kit</p>
      </div>
      <div class="rounded-gradient-borders">
        <div class="tttt"></div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '@/assets/fonts/font.scss';
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';

.rounded-gradient-borders {
  //text-align: center;
  //color: #fff;
  //font-size: 8em;
  width: 150px;
  height: 150px;
  position: relative;
  @include flex(row, center, center, 0px);
}

.rounded-gradient-borders::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: conic-gradient(red 230deg, rgba(red, 0.5) 230deg);
  mask: radial-gradient(farthest-side, transparent calc(100% - 12px), #fff 0);
}

.tttt {
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background-color: red;
}

.footer {
  @include size(100%, auto);
  padding-block: 60px 55px;
  background-color: white;

  &__content {
    @include size(100%, auto);
    max-width: $big-screen-max-width;
    margin: 0 auto;
    @include flex(column, start, stretch, 25px);

    .footer__title {
      @extend %roboto-slab-bold;
      @include text(2.5rem, 3.125rem, $color-dark, center);
    }

    .footer__input-section {
      @include size(100%, auto);
      @include flex(row, center, center, 10px);
      margin-bottom: 45px;

      .footer__input {
        @include size(27.5%, auto);
        padding: 10px 15px;
        border: $border;
        outline: none;
        background-color: transparent;
        border-radius: 5px;
        @extend %lato-regular;
        @include text(0.875rem, 1.25rem, $font-color-light, left);
      }
    }

    .footer__nav-bar {
      @include size(100%, auto);
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      list-style-type: none;

      &-block {
        @include size(100%, auto);
        @include flex(column, start, start, 15px);

        .footer__nav-bar-title {
          @include size(100%, auto);
          border-top-width: 5px;
          border-top-style: solid;
          padding-top: 35px;
          margin-bottom: 10px;
          @extend %lato-bold;
          @include text(0.875rem, 1.25rem, $color-dark, left);
        }

        .footer__nav-bar-link {
          text-decoration: none;
          @extend %lato-regular;
          @include text(0.875rem, 1.25rem, $font-color-medium, left);
        }
      }
    }

    .footer__contacts {
      @include size(100%, auto);
      margin-block: 64px 40px;
      padding-block: 30px;
      @include flex(row, start, center, 30px);
      border-top: $border;
      border-bottom: $border;

      .footer__logo {
        @include size(50px, 50px);
      }

      .footer__socials {
        margin-right: auto;
        @include flex(row, start, center, 15px);
      }
    }

    .footer__additional {
      @include size(100%, auto);
      @include flex(row, space-between, start, 30px);

      &-info {
        @extend %lato-regular;
        @include text(0.875rem, 1.25rem, $font-color-light, right);

        &_not-copyright {
          text-align: left;
          @include size(67%, auto);
        }
      }
    }
  }
}
</style>
