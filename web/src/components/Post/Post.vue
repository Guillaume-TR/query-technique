<template>
  <div class="post">
    <h3 class="post-title">
      {{ title }}
    </h3>
    <div class="post-date">
      <img class="post-date-icon" src="../../assets/images/calendar.svg" alt="calendar">
      <span class="post-date-text">{{ date }}</span>
    </div>
    <p class="post-short-description">
      {{ shortContent }}
    </p>
    <a class="post-read-more" :href="`post/${slug}`">
      Lire l'article
    </a>
    <hr class="post-separator" v-if="!lastPost">
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    slug: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    shortContent: {
      type: String,
      required: true,
    },
    lastPost: {
      type: Boolean,
      required: true,
    },
  }
}
</script>

<style lang="scss" src="./post.scss"></style>
