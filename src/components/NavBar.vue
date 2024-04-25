<script>
export default {
  props: {
    links: Array,
    place: String
  }
}
</script>

<template>
  <nav
    class="navigation"
    :class="[
      place === 'header' && 'navigation_place_header',
      place === 'footer' && 'navigation_place_footer',
      'navigation'
    ]"
  >
    <ul
      :class="[
        {
          navigation__list_place_header: place === 'header',
          navigation__list_place_footer: place === 'footer',
          navigation__list_place_popup: place === 'header-popup'
        },
        'navigation__list'
      ]"
    >
      <li class="navigation__item" v-for="link in links" :key="link.name">
        <a
          :href="link.href"
          :class="[
            'navigation__link',
            (place === 'header' || place === 'header-popup') && 'navigation__link_header',
            place === 'footer' && 'navigation__link_footer'
          ]"
          >{{ link.name }}</a
        >
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import '@/assets/fonts/font.scss';
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';

.navigation {
  @include size(100%, auto);

  &_place_header {
    background-color: $color-dark;

    @include media_md {
      display: none;
    }
  }

  &_place_footer {
    background-color: white;
  }

  &__list {
    padding-block: 14px 15px;
    @include size(100%, auto);
    max-width: $big-screen-max-width;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
    list-style-type: none;

    &_place_header {
      justify-content: space-between;

      @include media_lg {
        width: 90%;
        gap: 10px;
      }
    }

    &_place_footer {
      justify-content: start;

      @include media_md {
        justify-content: center;
      }

      @include media_sm {
        flex-direction: column;
        align-items: start;
      }
    }

    &_place_popup {
      flex-direction: column;
      align-items: start;
    }

    .navigation__item {
      padding-block: 3px;
      transition: all 0.2s ease;

      &:hover {
        transform: translateY(-1px);
        box-shadow: 2px 2px 5px rgba(gray, 0.5);
      }

      .navigation__link {
        @extend %lato-bold;
        font-size: 0.875rem;
        line-height: 1.25rem;
        letter-spacing: 0.5px;
        text-decoration: none;
        text-transform: uppercase;

        &_header {
          color: white;
        }

        &_footer {
          color: $color-dark;
        }
      }
    }
  }
}
</style>
