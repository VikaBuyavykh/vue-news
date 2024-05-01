<script>
import Cover from '@/components/Cover.vue'
import Card from '@/components/Card.vue'
import Carousel from '@/components/Carousel.vue'
import Material from '@/components/Material.vue'
import Quote from '@/components/Quote.vue'
import Tags from '@/components/Tags.vue'
import Support from '@/components/Support.vue'
import Selection from '@/components/Selection.vue'
import CommentsBlock from '@/components/CommentsBlock.vue'
export default {
  components: {
    Cover,
    Card,
    Carousel,
    Material,
    Quote,
    Tags,
    Support,
    Selection,
    CommentsBlock
  }
}
</script>

<template>
  <main class="article">
    <cover></cover>
    <div class="article__part article__part_first">
      <div class="article__paragraphs">
        <p class="article__first-paragraph article__paragraph">
          Many geographers are trained in toponymy and cartology, this is not their main
          preoccupation. Geographers study the space and the temporal database distribution of
          phenomena, processes, and features as well as the interaction of humans and their
          environment. Because space and place affect a variety of topics, such as economics,
          health, climate, plants and animals, geography is highly interdisciplinary.
          The interdisciplinary nature of the geographical approach depends on an attentiveness
          to the relationship between physical and human phenomena and its spatial patterns.
        </p>
        <h3 class="article__subtitle">Integrated Geography</h3>
        <p class="article__paragraph">
          Geography as a discipline can be split broadly into two main subsidiary fields: human
          geography and physical geography. The former largely focuses on the built environment and
          how humans create, view, manage, and influence space. The latter examines the natural
          environment, and how organisms, climate, soil, water, and landforms produce and interact.
        </p>
        <p class="article__paragraph">
          The difference between these approaches led to a third field, environmental geography,
          which combines physical and human geography and concerns the interactions between
          the environment and humans.
        </p>
        <p class="article__paragraph">
          The accompanying text mentions seven outer regions beyond the encircling ocean. The
          descriptions of five of them have survived. In contrast to the Imago Mundi, an earlier
          Babylonian world map dating back to the 9th century BC depicted Babylon as being further
          north from the center of the world, though it is not certain what that center was supposed
          to represent.
        </p>
      </div>
      <card></card>
    </div>
    <carousel></carousel>
    <div class="article__part">
      <div class="article__paragraphs">
        <p class="article__paragraph">
          The oldest known world maps date back to ancient Babylon from the 9th century BC. The best
          known Babylonian world map, however, is the Imago Mundi of 600 BC. The map as
          reconstructed by Eckhard Unger shows Babylon on the Euphrates, surrounded by a circular
          landmass showing Assyria, Urartu and several cities, in turn surrounded by a "bitter
          river" (Oceanus), with seven islands arranged around it so as to form a seven-pointed
          star.
        </p>
        <p class="article__paragraph">
          The accompanying text mentions seven outer regions beyond the encircling ocean. The
          descriptions of five of them have survived. In contrast to the Imago Mundi, an earlier
          Babylonian world map dating back to the 9th century BC depicted Babylon as being further
          north from the center of the world, though it is not certain what that center was supposed
          to represent.
        </p>
        <p class="article__paragraph">
          The ideas of Anaximander: considered by later Greek writers to be the true founder of
          geography, come to us through fragments quoted by his successors. Anaximander is credited
          with the invention of the gnomon, the simple, yet efficient Greek instrument that allowed
          the early measurement of latitude. Thales is also credited with the prediction of
          eclipses. The foundations of geography can be traced to the ancient cultures, such as the
          ancient, medieval, and early modern Chinese.
        </p>
        <quote></quote>
        <p class="article__paragraph">
          The Greeks, who were the first to explore geography as both art and science, achieved this
          through Cartography, Philosophy, and Literature, or through Mathematics. There is some
          debate about who was the first person to assert that the Earth is spherical in shape, with
          the credit going either to Parmenides or Pythagoras. Anaxagoras was able to demonstrate
          that the profile of the Earth was circular by explaining eclipses. However, he still
          believed that the Earth was a flat disk, as did many of his contemporaries.
        </p>
        <p class="article__paragraph">
          The first rigorous system of latitude and longitude lines is credited to Hipparchus. He
          employed a sexagesimal system that was derived from Babylonian mathematics.
        </p>
        <tags></tags>
        <support></support>
      </div>
      <material></material>
    </div>
    <selection></selection>
    <comments-block></comments-block>
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

    &_first {
      padding-block: 45px;
    }

    .article__paragraphs {
      @include size(100%, auto);
      @include flex(column, start, start, 0px);

      .article__paragraph {
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
