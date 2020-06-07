<template>
  <main class="main">
    <div class="article-details">
      <h3 class="article-details-title">
        {{ article.title }}
      </h3>
    <div class="article-details-date">
      <img class="article-details-date-icon" src="../../assets/images/calendar.svg" alt="calendar">
      <span class="article-details-date-text">{{ article.date }}</span>
    </div>
    <p class="article-details-content" v-html="article.content"></p>
    </div>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ArticleDetails',
  data() {
    return {
      article: { },
    };
  },
  mounted() {
    const articleSlug = this.$route.params.slug;

    axios.get(`http://localhost:5000/article/${articleSlug}`)
      .then(response => {
        this.article = response.data.article;
      })
      .catch(error => {
        console.log(error);
      })
  }
}
</script>

<style lang="scss" src="./articleDetails.scss"></style>
