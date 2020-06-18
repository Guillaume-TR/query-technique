<template>
  <header class="admin-header">
    <nav class="admin-header-menu">
      <button class="admin-header-menu-button" @click="toggleMenu">Menu</button>
      <ul class="admin-header-menu-items" :class="{'active': mainMenu.display}">
        <li class="admin-header-menu-items-item" @click="toggleMenu">
          <router-link
            class="item-link"
            :to="{ name: 'admin-articles' }"
          >
            Articles
          </router-link>
        </li>
        <li class="admin-header-menu-items-item" @click="toggleMenu">
          <router-link
            class="item-link"
            :to="{ name: 'admin-articles' }"
          >
            Flash
          </router-link>
        </li>
        <li class="admin-header-menu-items-item" @click="toggleMenu">
          <router-link
            class="item-link"
            :to="{ name: 'admin-articles' }"
          >
            Comptes
          </router-link>
        </li>
        <li class="admin-header-menu-items-item" @click="toggleMenu">
          <router-link
            class="item-link"
            :to="{ name: 'admin-articles' }"
          >
            Commentaires
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>

export default {
  name: 'Header',
  data() {
    return {
      mainMenu: {
        display: false
      }
    }
  },
  methods: {
    toggleMenu() {
      this.mainMenu.display = !this.mainMenu.display;
    }
  },
}
</script>

<style lang="scss" src="./header.scss"></style>
