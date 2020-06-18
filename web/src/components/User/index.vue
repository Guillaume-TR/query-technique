<template>
  <div id="app">
    <Header />
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Header from './Header';

export default {
  name: 'User',
  components: {
    Header,
  }
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
