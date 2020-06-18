<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './Header';

export default {
  name: 'Admin',
  components: {
    Header
  }
}
</script>

<style lang="scss">
@import 'src/assets/styles/variables.scss';

</style>
