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
    :style="{ backgroundColor: `${place === 'header' ? '#262d33' : 'white'}` }"
    class="navigation"
  >
    <ul
      :style="{ justifyContent: `${place === 'header' ? 'space-between' : 'start'}` }"
      class="navigation__list"
    >
      <li class="navigation__item" v-for="link in links" :key="link.name">
        <a
          :href="link.href"
          :style="{ color: `${place === 'header' ? 'white' : '#262d33'}` }"
          class="navigation__item-link"
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

    .navigation__item {
      padding-block: 3px;
      transition: all 0.2s ease;

      &:hover {
        transform: translateY(-1px);
        box-shadow: 2px 2px 5px rgba(gray, 0.5);
      }

      &-link {
        @extend %lato-bold;
        font-size: 0.875rem;
        line-height: 1.25rem;
        letter-spacing: 0.5px;
        text-decoration: none;
        text-transform: uppercase;
      }
    }
  }
}
</style>
