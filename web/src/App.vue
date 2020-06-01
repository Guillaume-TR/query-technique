<template>
  <div id="app">
    <Header />
    <Home />
  </div>
</template>

<script>

import Header from './components/Header/Header';
import Home from './components/Home/Home';

export default {
  name: 'App',
  components: {
    Header,
    Home
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
}

</style>
