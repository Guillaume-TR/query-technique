<template>
  <main class="main">
    <div class="articles">
      <Article 
        :key="index"
        v-for="(article, index) in articles"
        :slug="article.slug"
        :title="article.title"
        :date="article.date"
        :shortContent="article.shortContent"
        :lastArticle="index === (articlesNumber - 1)"
      />
    </div>
    <div class="articles-not-found" v-if="articlesNumber < 1">
      Aucun article trouvé ...
    </div>
  </main>
</template>

<script>

import Article from '../Article/Article';

import axios from 'axios';

export default {
  name: 'Home',
  components: {
    Article,
  },
  data() {
    return {
      articles: [],
      articlesNumber: 0
    };
  },
  mounted() {
    axios.get('http://localhost:5000/article')
      .then(response => {
        this.articles  = response.data.articles;
        this.articlesNumber = response.data.articlesNumber;
      })
      .catch(error => {
        console.log(error);
      })
  }
}
</script>

<style lang="scss" src="./home.scss"></style>
