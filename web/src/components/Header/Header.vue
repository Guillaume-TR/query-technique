<template>
  <header class="header" :class="{'nav-desktop--fixed': menu.positionTop}">

    <div class="header-head">
      <h1 class="header-head-title">
        <router-link :to="{ name: 'home' }">Query Technique</router-link>
      </h1>
      <h2 class="header-head-catchphrase">Phrase d'accroche en reflexion</h2>
    </div>

    <nav class="header-nav" :class="{'nav--top': menu.positionTop}">

      <h1 class="header-nav-title" :class="{'hidden': menu.hiddenTitle}">
        <router-link :to="{ name: 'home' }">Query Technique</router-link>
      </h1>

      <ul class="header-nav-items" :class="{'active': menu.display}">
        <li class="header-nav-items-item">
          <a class="item-link" href="#">Link</a>
        </li>
        <li class="header-nav-items-item">
          <a class="item-link" href="#">Link</a>
        </li>
        <li class="header-nav-items-item">
          <a class="item-link" href="#">Link</a>
        </li>
        <li class="header-nav-items-item">
          <a class="item-link" href="#">Link</a>
        </li>
        <li class="header-nav-items-item">
          <a class="item-link" href="#">Link</a>
        </li>
      </ul>

      <button class="header-nav-btn" :class="{'btn--fixed': menu.fixedButton || menu.display}" @click="toggleMenu">
        <i class="fas" :class="{'fa-bars': !menu.display, 'fa-times': menu.display}"></i>
      </button>

    </nav>

  </header>
</template>

<script>

export default {
  name: 'Header',
  data() {
    return {
      menu: {
        display: false,
        hiddenTitle: true,
        fixedButton: false,
        positionTop: false,
      },
    };
  },
  methods: {
    toggleMenu() {
      this.menu.display = !this.menu.display;
    }
  },
  mounted() {
    const ctx = this;

    document.addEventListener('scroll', () => {
      const menuHeight = document.getElementsByClassName('header-nav')[0].clientHeight;
      const headerHeight = document.getElementsByClassName('header-head')[0].clientHeight;
      const scrollPosition = window.scrollY;

      if (!ctx.menu.fixedButton) {
        if (scrollPosition > (menuHeight / 2)) {
          ctx.menu.fixedButton = true;
        }
      } else {
        if (scrollPosition < (menuHeight / 2)) {
          ctx.menu.fixedButton = false;
        }
      }

      if (ctx.menu.positionTop) {
        if (scrollPosition < headerHeight) {
          ctx.menu.positionTop = false;
          ctx.menu.hiddenTitle = true;
        }
      } else {
        if (scrollPosition > headerHeight) {
          ctx.menu.positionTop = true;
          ctx.menu.hiddenTitle = false;
        }
      }
    })
  }
}
</script>

<style lang="scss" src="./header.scss"></style>
