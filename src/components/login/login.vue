<template lang="pug">
.container-login
  .container-signin
    .container-header
      img(src="../../assets/img/white-logo.svg", alt="Logo vermelha")
    .container-body
      .form-signin(v-if="!isCreating")
        user-sign-in(@sign-up-form-handler="registerFormHandler")
      .form-signup(v-else)
        user-sign-up(@sign-up-form-handler="registerFormHandler")
</template>

<style lang="stylus" scoped>
.container-login {
  display: flex;
  position: fixed;
  overflow: hidden;
  width: 100%;
}

.container-signin {
  height: 100vh;
  width: 100%;
  background: $c-white;
}

.container-header {
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $c-red-default;
}

.container-header img {
  margin-bottom: 120px;
}

.container-body {
  padding-left: 5px;
  padding-right: 5px;
}

.form-signin, .form-signup {
  max-width: 450px;
  margin: -140px auto 10px;
}

.input-wrapper {
  width: 100%;
  position: relative;
}

</style>

<script lang="ts" src="./login.ts"></script>
