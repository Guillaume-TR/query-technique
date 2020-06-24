<template>
  <main class="main">
    <form class="form">
      <h1 class="form-title">
        Connexion au panel <br> d'administration
      </h1>
      <label class="form-label" for="email">
        Email
      </label>
      <input
        id="email"
        class="form-field form-field--email"
        type="email"
        placeholder="example@email.com"
        v-model="email"
      >
      <label class="form-label" for="password">
        Mot de passe
      </label>
      <div class="form-group">
        <input
          id="password"
          class="form-group-field form-group-field--password"
          :type="passwordHidden ? 'password' : 'text'"
          :placeholder="passwordHidden ? '************' : 'mot de passe'"
          v-model="password"
        >
        <img class="form-group-display" :src="eyeIcon" width="20" @click="togglePassword" />
      </div>
      <button class="form-button" type="submit">Se connecter</button>
    </form>
  </main>
</template>

<script>
import eyeIcon from '../../../assets/images/eye.png';

export default {
  name: 'Login',
  data() {
    return {
      email: "",
      password: "",
      eyeIcon,
      passwordHidden: true
    }
  },
  methods: {
    togglePassword() {
      this.passwordHidden = !this.passwordHidden;
    }
  }
}
</script>

<style lang="scss" src="./login.scss" scoped></style>
