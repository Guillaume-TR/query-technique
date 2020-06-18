<template>
  <main class="main">

    <h2 class="section-title">Gestion des articles</h2>

    <ManagementMenu :articlesChecked="articlesChecked" />

    <table class="articles">
      <tbody class="articles-list">
        <tr
          class="articles-list-item"
          v-for="(article, index) in articles"
          :key="index"
          @click="toggleCheckArticle(index)"
        >
          <td class="articles-list-item-id">{{ article.id }}</td>
          <td class="articles-list-item-title">{{ article.title }}</td>
          <td class="articles-list-item-check">
            <div class="check-icon" :class="{ 'active': checkMode, 'checked': article.checked }">
              <span class="line-1"></span>
              <span class="line-2"></span>
            </div>
          </td>
        </tr>
      </tbody>
      
    </table>

  </main>
</template>

<script>
import axios from 'axios';
import ManagementMenu from '../ManagementMenu';

export default {
  name: 'Articles',
  components: {
    ManagementMenu,
  },
  data() {
    return {
      articles: [],
      articlesChecked: [],
      checkMode: false,
    }
  },
  methods: {
    toggleCheckArticle(articleIndex) {
      this.articles[articleIndex].checked = !this.articles[articleIndex].checked;

      const articleId = this.articles[articleIndex].id;
      const index = this.articlesChecked.indexOf(articleId);

      if (index === -1) {
          this.articlesChecked.push(articleId);
      } else {
          this.articlesChecked.splice(index, 1);
      }
      this.toggleCheckMode();
    },
    toggleCheckMode() {
      this.checkMode = this.articlesChecked.length > 0;
    }
  },
  mounted() {
    axios.get('http://192.168.1.6:5000/article')
      .then(response => {
        response.data.articles.map((article) => {
          const articleFormat = {
            ...article,
            checked: false
          }
          this.articles.push(articleFormat);
        });
      })
      .catch(error => {
        console.log(error);
      })
  }
}
</script>

<style lang="scss" src="./articles.scss" scoped></style>
