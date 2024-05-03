<script>
export default {
  props: {
    isSubtitle: Boolean,
    index: Number
  }
}
</script>

<template>
  <h3 v-if="isSubtitle" class="article__subtitle"><slot></slot></h3>
  <p v-else class="article__paragraph" :class="{ 'article__first-paragraph': index === 0 }">
    <slot></slot>
  </p>
</template>
