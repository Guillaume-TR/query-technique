<template>
  <header class="admin-header">
    <nav class="admin-header-nav">

      <h1 class="admin-header-nav-title">
        Query-Technique
      </h1>

      <h2 class="admin-header-nav-subtitle">
        Administration
      </h2>

      <ul class="nav">
        <li class="nav-item">
          <router-link class="nav-item-link" :to="{ name:'admin-home' }">Accueil</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-item-link" :to="{ name:'admin-articles' }">Articles</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-item-link" :to="{ name:'admin-home' }">Commentaires</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-item-link" :to="{ name:'admin-home' }">Flash</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-item-link" :to="{ name:'admin-home' }">Comptes</router-link>
        </li>
      </ul>
    </nav>

    <div class="admin-header-breadcrumb">
      Administration
    </div>
    
  </header>
</template>

<script>

export default {
  name: 'Header',
}
</script>

<style lang="scss" src="./header.scss"></style>
