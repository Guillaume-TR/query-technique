<template>
  <div class="article">
    <h3 class="article-title">
      {{ title }}
    </h3>
    <div class="article-date">
      <img class="article-date-icon" src="../../../assets/images/calendar.svg" alt="calendar">
      <span class="article-date-text">{{ date }}</span>
    </div>
    <p class="article-short-description">
      {{ shortContent }}
    </p>
    <router-link class="article-read-more" :to="{
      name: 'user-article-details',
      params: {
        slug
      }
    }">
      Lire l'article
    </router-link>
    <hr class="article-separator" v-if="!lastArticle">
  </div>
</template>

<script>
export default {
  name: 'Article',
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
    lastArticle: {
      type: Boolean,
      required: true,
    },
  }
}
</script>

<style lang="scss" src="./article.scss"></style>
