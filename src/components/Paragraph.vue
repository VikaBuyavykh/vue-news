<script>
import Quote from '@/components/Quote.vue'
export default {
  components: {
    Quote
  },
  props: {
    isSubtitle: Boolean,
    isQuote: Boolean,
    index: Number,
    avatar: String,
    name: String,
    profession: String,
    quote: String
  }
}
</script>

<template>
  <h3 v-if="isSubtitle" class="article__subtitle"><slot></slot></h3>
  <quote
    v-else-if="isQuote"
    :quote="quote"
    :avatar="avatar"
    :name="name"
    :profession="profession"
  ></quote>
  <p v-else class="article__paragraph" :class="{ 'article__first-paragraph': index === 0 }">
    <slot></slot>
  </p>
</template>
