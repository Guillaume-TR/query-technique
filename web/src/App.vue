<template>
  <div id="app">
    <Header />
    <PostDetails />
    <footer class="footer">
      <div class="footer-name">Guillaume Terrien</div>
      <div class="footer-version">1.0.0</div>
    </footer>
  </div>
</template>

<script>

import Header from './components/Header/Header';
// import Home from './components/Home/Home';
import PostDetails from './components/PostDetails/PostDetails';

export default {
  name: 'App',
  components: {
    Header,
    // Home,
    PostDetails
  }
}
</script>

<style lang="scss">

@import './assets/styles/reset.scss';
@import './assets/styles/variables.scss';

body {
  font-family: 'Bralow', sans-serif;
  font-size: $fs-regular;
  color: $c-neutral-light;
  background: $c-primary-darkest;

  .footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 1rem 0 6rem;
    padding: 3rem 10%;
    color: $c-primary;
    background: $c-primary-darker;
  }
}

</style>
