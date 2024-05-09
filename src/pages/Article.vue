<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
import Cover from '@/components/Cover.vue'
import Card from '@/components/Card.vue'
import Carousel from '@/components/Carousel.vue'
import Material from '@/components/Material.vue'
import Tags from '@/components/Tags.vue'
import Support from '@/components/Support.vue'
import Selection from '@/components/Selection.vue'
import CommentsBlock from '@/components/CommentsBlock.vue'
import Paragraph from '@/components/Paragraph.vue'
export default {
  components: {
    Cover,
    Card,
    Carousel,
    Material,
    Tags,
    Support,
    Selection,
    CommentsBlock,
    Paragraph
  },
  computed: {
    ...mapState({
      firstPartOfTheText: (state) => state.content.firstPartOfTheText,
      lastPartOfTheText: (state) => state.content.lastPartOfTheText,
      paragraphs: (state) => state.content.paragraphs,
      id: (state) => state.content.id
    }),
    ...mapGetters({
      testArticle: 'articles/testArticle'
    })
  },
  methods: {
    ...mapMutations({
      setParagraphs: 'content/setParagraphs',
      setText: 'content/setText',
      setIsFavorite: 'content/setIsFavorite',
      setLikes: 'content/setLikes'
    })
  },
  watch: {
    testArticle: {
      handler() {
        this.setParagraphs(this.testArticle.content)
        this.setText()
        this.setIsFavorite(this.testArticle.isFavorite)
        this.setLikes(this.testArticle.likes)
      },
      deep: true
    }
  },
  mounted() {
    if (this.testArticle) {
      this.setParagraphs(this.testArticle.content)
      this.setIsFavorite(this.testArticle.isFavorite)
      this.setLikes(this.testArticle.likes)
      this.setText()
    }
  }
}
</script>

<template>
  <main v-if="testArticle" class="article">
    <cover
      :title="testArticle.title"
      :description="testArticle.description"
      :theme="testArticle.theme"
      :themeColor="testArticle.themeColor"
      :date="testArticle.date"
      :comments="testArticle.comments"
      :shares="testArticle.shares"
      :img="testArticle.img"
    ></cover>
    <div class="article__part article__part_first">
      <div class="article__paragraphs">
        <paragraph
          v-for="paragraph in firstPartOfTheText"
          :key="paragraph.index"
          :isSubtitle="paragraph.isSubtitle"
          :index="paragraph.index"
          :isQuote="paragraph.isQuote"
          :quote="paragraph.quote"
          :avatar="paragraph.avatar"
          :name="paragraph.name"
          :profession="paragraph.profession"
          >{{ paragraph.text }}</paragraph
        >
      </div>
      <card
        :avatar="testArticle.author.avatar"
        :name="testArticle.author.name"
        :profession="testArticle.author.profession"
        :articles="testArticle.author.articles"
        :fb-link="testArticle.author.fbLink"
        :twitter-link="testArticle.author.twitterLink"
        :ig-link="testArticle.author.igLink"
        :local-link="testArticle.author.localLink"
      ></card>
    </div>
    <carousel v-if="testArticle.gallery" :gallery="testArticle.gallery"></carousel>
    <div class="article__part">
      <div class="article__paragraphs">
        <paragraph
          v-for="paragraph in lastPartOfTheText"
          :key="paragraph.index"
          :isSubtitle="paragraph.isSubtitle"
          :index="paragraph.index"
          :isQuote="paragraph.isQuote"
          :quote="paragraph.quote"
          :avatar="paragraph.avatar"
          :name="paragraph.name"
          :profession="paragraph.profession"
          >{{ paragraph.text }}</paragraph
        >
        <tags :keys="testArticle.keys"></tags>
        <support :shares="testArticle.shares" :tweets="testArticle.tweets"></support>
      </div>
      <material></material>
    </div>
    <selection></selection>
    <comments-block :comments="testArticle.comments"></comments-block>
  </main>
</template>

<style lang="scss" scoped>
@import '@/assets/fonts/font.scss';
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';

.article {
  @include size(100%, auto);
  @include flex(column, start, center, 0px);

  &__part {
    @include size(100%, auto);
    max-width: 946px;
    display: grid;
    grid-template-columns: auto 264px;
    column-gap: 60px;

    @include media_lg {
      width: 90%;
    }

    @include media_md {
      grid-template-columns: 1fr;
    }

    &_first {
      padding-top: 45px;

      @include media_md {
        padding-block: 15px 30px;
      }
    }

    .article__paragraphs {
      @include size(100%, auto);
      @include flex(column, start, start, 0px);

      .article__paragraph {
        letter-spacing: -0.2px;
        @extend %lato-regular;
        @include text(1.125rem, 1.875rem, $font-color-medium, left);
        padding-block: 15px;
      }

      .article__first-paragraph::first-letter {
        margin-top: 10px;
        margin-right: 10px;
        float: left;
        @include text(6.25rem, 4.6875rem, $accent-blue, center);
      }

      .article__subtitle {
        @extend %roboto-slab-bold;
        @include text(1.5625rem, 1.875rem, $color-dark, left);
        padding-block: 30px;
      }
    }
  }
}
</style>
