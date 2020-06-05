<template>
  <main class="main">
    <div class="posts">
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
  </main>
</template>

<script>

import Article from '../Article/Article';

export default {
  name: 'Home',
  components: {
    Article,
  },
  data() {
    return {
      articles: [
        {
          id: 0,
          slug: "les-erreurs-cors-cross-origin-resource-sharing--0",
          title: "Les erreurs CORS, Cross-origin resource sharing",
          date: "20 Décembre 2020",
          shortContent: "Suspendisse semper augue faucibus, consectetur dolor et, ultrices dui. Suspendisse maximus ipsum ac nunc sodales, in blandit lacus efficitur. Donec non laoreet justo. Nam nec lacinia nulla. Vestibulum tellus mauris, aliquam in dapibus ut, varius in odio. Praesent nec dignissim diam...",
        },
        {
          id: 1,
          slug: "les-faille-csrf-cross-site-request-forgery--1",
          title: "Les faille CSRF, Cross-site request forgery",
          date: "02 Octobre 2020",
          shortContent: "Vivamus faucibus quam lacinia est dictum, nec tincidunt urna consectetur. Praesent semper nunc aliquet justo dignissim, eu placerat ipsum cursus. Sed consequat commodo dui sit amet auctor. Suspendisse tincidunt, turpis eget consectetur congue, risus lectus bibendum nunc, at ullamcorper ligula enim ac...",
        },
        {
          id: 2,
          slug: "les-erreurs-cors-cross-origin-resource-sharing--2",
          title: "Les erreurs CORS, Cross-origin resource sharing",
          date: "20 Décembre 2020",
          shortContent: "Suspendisse semper augue faucibus, consectetur dolor et, ultrices dui. Suspendisse maximus ipsum ac nunc sodales, in blandit lacus efficitur. Donec non laoreet justo. Nam nec lacinia nulla. Vestibulum tellus mauris, aliquam in dapibus ut, varius in odio. Praesent nec dignissim diam...",
        },
        {
          id: 3,
          slug: "les-faille-csrf-cross-site-request-forgery--3",
          title: "Les faille CSRF, Cross-site request forgery",
          date: "02 Octobre 2020",
          shortContent: "Vivamus faucibus quam lacinia est dictum, nec tincidunt urna consectetur. Praesent semper nunc aliquet justo dignissim, eu placerat ipsum cursus. Sed consequat commodo dui sit amet auctor. Suspendisse tincidunt, turpis eget consectetur congue, risus lectus bibendum nunc, at ullamcorper ligula enim ac...",
        },
      ],
      articlesNumber: 4,
    };
  },
}
</script>

<style lang="scss" src="./home.scss"></style>
