<script>
import { mapGetters } from 'vuex'
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
    ...mapGetters({
      separator: 'articles/separatorArticle'
    })
  }
}
</script>

<template>
  <article v-if="separator" class="separator" :style="{ backgroundImage: `url(${separator.img})` }">
    <h2 class="separator__title">{{ separator.title }}</h2>
    <app-button @click="() => router.push(separator.link)" class="more-btn"
      >Read more <img src="/arrow.svg" alt="Icon of arrow"
    /></app-button>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/fonts/font.scss';
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';

.separator {
  padding-block: 50px 55px;
  @include size(100%, auto);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @include flex(column, start, center, 5px);

  @include media_smaller {
    padding-block: 30px 35px;
  }

  &__title {
    @include size(60%, auto);
    max-width: 946px;
    @extend %roboto-slab-bold;
    @include text(2.5rem, 3.125rem, white, center);

    @include media_smaller {
      font-size: 1.5rem;
      line-height: 2.125rem;
    }
  }
}
</style>
