<script>
import { mapMutations, mapState } from 'vuex'
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
  },
  computed: {
    ...mapState({
      searchQuery: (state) => state.footer.searchQuery
    })
  },
  methods: {
    ...mapMutations({
      setSearchQuery: 'footer/setSearchQuery'
    })
  }
}
</script>

<template>
  <footer class="footer">
    <div class="footer__content">
      <h2 class="footer__title">Subscribe now and get 20% off</h2>
      <form class="footer__input-section">
        <input
          class="footer__input"
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          :value="searchQuery"
          @input="setSearchQuery"
        />
        <app-button style="margin: 0">Subscribe</app-button>
      </form>
      <ul class="footer__nav-bar">
        <li v-for="section in sections" :key="section.name" class="footer__nav-bar-block">
          <h3 :style="{ borderTopColor: section.themeColor }" class="footer__nav-bar-title">
            {{ section.name }}
          </h3>
          <router-link
            class="footer__nav-bar-link"
            v-for="link in section.links"
            :key="link.name"
            :to="link.link"
            >{{ link.name }}</router-link
          >
        </li>
      </ul>
      <div class="footer__contacts">
        <img class="footer__logo" src="/logo.svg" alt="Logo" />
        <nav-bar :links="contacts" place="footer"></nav-bar>
        <div class="footer__socials">
          <a class="footer__socials-link" target="_blank" href="https://www.facebook.com/"
            ><img src="/fb.svg" alt="Facebook icon"
          /></a>
          <a class="footer__socials-link" target="_blank" href="https://twitter.com/"
            ><img src="/twitter.svg" alt="Twitter icon"
          /></a>
          <a class="footer__socials-link" target="_blank" href="https://www.youtube.com/?hl=RU"
            ><img src="/yt.svg" alt="Youtube icon"
          /></a>
          <a class="footer__socials-link" target="_blank" href="https://www.instagram.com/"
            ><img src="/ig.svg" alt="Instagram icon"
          /></a>
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
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '@/assets/fonts/font.scss';
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';

.footer {
  @include size(100%, auto);
  padding-block: 60px 55px;
  background-color: white;

  @include media_smaller {
    padding-block: 30px;
  }

  &__content {
    @include size(100%, auto);
    max-width: $big-screen-max-width;
    margin: 0 auto;
    @include flex(column, start, stretch, 25px);

    @include media_lg {
      width: 90%;
    }

    .footer__title {
      @extend %roboto-slab-bold;
      @include text(2.5rem, 3.125rem, $color-dark, center);

      @include media_smaller {
        font-size: 1.5rem;
        line-height: 2.125rem;
      }
    }

    .footer__input-section {
      @include size(100%, auto);
      @include flex(row, center, center, 15px);
      margin-bottom: 45px;

      @include media_md {
        margin-bottom: 25px;
      }

      @include media_smaller {
        flex-direction: column;
        margin-bottom: 10px;
      }

      .footer__input {
        @include size(27.5%, auto);
        padding: 10px 15px;
        border: $border;
        outline: none;
        background-color: transparent;
        border-radius: 5px;
        @extend %lato-regular;
        @include text(0.875rem, 1.25rem, $font-color-light, left);

        @include media_lg {
          width: 35%;
        }

        @include media_smaller {
          width: 50%;
        }

        @include media_sm {
          width: 75%;
        }

        @include media_xs {
          width: 100%;
        }
      }
    }

    .footer__nav-bar {
      @include size(100%, auto);
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      list-style-type: none;

      @include media_smaller {
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(3, 1fr);
        row-gap: 30px;
      }

      @include media_sm {
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: repeat(2, 1fr);
      }

      &-block {
        @include size(100%, auto);
        @include flex(column, start, start, 15px);

        .footer__nav-bar-title {
          @include size(100%, auto);
          border-top-width: 5px;
          border-top-style: solid;
          padding-top: 30px;
          margin-bottom: 10px;
          @extend %lato-bold;
          @include text(0.875rem, 1.25rem, $color-dark, left);
        }

        .footer__nav-bar-link {
          text-decoration: none;
          @extend %lato-regular;
          @include text(0.875rem, 1.25rem, $font-color-medium, left);
          transition: all 0.2s ease;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    .footer__contacts {
      @include size(100%, auto);
      margin-block: 40px 17px;
      padding-block: 28px 26px;
      @include flex(row, start, center, 30px);
      border-top: $border;
      border-bottom: $border;

      @include media_md {
        @include flex(column, center, center, 10px);
      }

      @include media_smaller {
        margin-top: 17px;
      }

      @include media_sm {
        align-items: flex-start;
        margin-block: 0px;
      }

      .footer__logo {
        @include size(50px, 50px);
      }

      .footer__socials {
        margin-right: auto;
        @include flex(row, start, center, 15px);

        @include media_md {
          justify-content: center;
          margin: 0;
        }

        &-link {
          transition: all 0.2s ease;

          &:hover {
            transform: translateY(-2px);
          }
        }
      }
    }

    .footer__additional {
      @include size(100%, auto);
      @include flex(row, space-between, start, 30px);

      @include media_smaller {
        flex-direction: column;
      }

      &-info {
        @extend %lato-regular;
        @include text(0.875rem, 1.25rem, $font-color-light, right);

        &_not-copyright {
          text-align: left;
          @include size(67%, auto);

          @include media_smaller {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
