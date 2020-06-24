<template>
  <main class="main">

    <div class="section">
      <h2 class="section-title">Gestion des articles</h2>
      <button type="button" class="section-button">Ajouter un article</button>
    </div>

    <table class="articles">
      <thead>
        <tr class="articles-head">
          <th class="articles-head-cel articles-head-cel--id">#</th>
          <th class="articles-head-cel articles-head-cel--title">Titre</th>
          <th class="articles-head-cel articles-head-cel--date">Date</th>
          <th class="articles-head-cel articles-head-cel--action">Action</th>
        </tr>
      </thead>

      <tbody>
        <tr
          class="articles-item"
          v-for="(article, index) in articles"
          :key="index"
        >
          <td class="articles-item-cel articles-item-cel--id">{{ article.id }}</td>
          <td class="articles-item-cel articles-item-cel--title">{{ article.title }}</td>
          <td class="articles-item-cel articles-item-cel--date">{{ article.date }}</td>
          <td class="articles-item-cel articles-item-cel--action">
            <a href="#" class="action action--edit">
              <Icon name="edit" size="30" />
              <span>Modifier</span>
            </a>
            <a href="#" class="action action--delete">
              <Icon name="delete" size="30" />
              <span>Supprimer</span>
            </a>
          </td>
        </tr>
      </tbody>
    </table>

  </main>
</template>

<script>
import axios from 'axios';

import Icon from '../../icons/Icon';

export default {
  name: 'Articles',
  components: {
    Icon,
  },
  data() {
    return {
      articles: []
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

<style lang="scss" src="./articles.scss"></style>
