<template>
  <main class="main">
    <form class="login-form">
      <h1 class="login-form-title">
        Connexion au panel <br> d'administration
      </h1>
      <label class="login-form-label" for="email">
        Email
      </label>
      <input
        id="email"
        class="login-form-field login-form-field--email"
        type="email"
        placeholder="example@email.com"
      >
      <label class="login-form-label" for="password">
        Mot de passe
      </label>
      <input
        id="password"
        class="login-form-field login-form-field--password"
        type="password"
        placeholder="********"
      >
      <button class="login-form-button" type="submit">Se connecter</button>
    </form>
  </main>
</template>

<script>
export default {
  name: 'Login',
}
</script>

<style lang="scss" src="./login.scss" scoped></style>
