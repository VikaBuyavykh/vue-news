<script>
import { mapMutations, mapState } from 'vuex'
import Comments from '@/components/UI/Comments.vue'
export default {
  components: {
    Comments
  },
  computed: {
    ...mapState({
      testArticles: (state) => state.articles.testArticles
    })
  },
  methods: {
    ...mapMutations({
      setId: 'content/setId'
    })
  }
}
</script>

<template>
  <section class="selection">
    <ul class="selection__content">
      <li
        v-for="item in testArticles.filter((item, index) => index > 0 && index < 5)"
        :key="item.id"
        @click="(e) => setId(Number(e.currentTarget.id))"
        class="selection__item"
        :id="item.id"
      >
        <picture>
          <source :srcset="item.img.big" media="(min-width: 1000px)" />
          <img class="selection__img" :src="item.img.small" :alt="item.img.alt" />
        </picture>
        <h3 class="selection__title">{{ item.title }}</h3>
        <div class="selection__info">
          <comments type="readers" :content="item.readers"></comments>
          <comments type="comments" :content="item.comments.length"></comments>
        </div>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/fonts/font.scss';
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';

.selection {
  @include size(100%, auto);
  padding-block: 60px 90px;
  margin-block: 60px 30px;
  background-color: #f5f5f5;

  @include media_lg {
    padding-block: 30px;
    margin-block: 30px;
  }

  &__content {
    margin: 0 auto;
    @include size(100%, auto);
    max-width: $big-screen-max-width;
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;

    @include media_lg {
      width: 90%;
      grid-template-columns: repeat(2, 1fr);
    }

    @include media_sm {
      grid-template-columns: 1fr;
      gap: 15px;
    }

    .selection__item {
      cursor: pointer;
      @include size(100%, auto);
      @include flex(column, start, stretch, 15px);

      .selection__img {
        @include size(100%, 180px);
        border-radius: 10px;
        object-fit: cover;
        object-position: center;
      }

      .selection__title {
        @extend %roboto-slab-bold;
        @include text(1rem, 1.5625rem, $color-dark, left);
      }

      .selection__info {
        @include flex(row, start, center, 10px);
      }
    }
  }
}
</style>
