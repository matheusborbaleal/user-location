<template lang="pug">
.container-login
  .container-signin
    .container-header
      img(src="../../assets/img/white-logo.svg", alt="Logo vermelha")
    .container-body
      .form-signin(v-if="!isCreating")
        .form-signin-body
          .form-group.inner-addon
            label E-mail
            b-input(size="sm", v-model="signInUser.email" type="email")
          .form-group.inner-addon
            label Senha
            b-input(size="sm", type="password", v-model="signInUser.password")
          b-button#submit.btn.btn-primary.btn-block(@click="signIn") Entrar
          .sign-up--wrapper
            span Não tem uma conta?
            b-button.sign-up--button(variant="flat btn-sm")(
              @click="signUpHandler"
            ) Crie uma agora.
      .form-signup(v-else)
        .form-signup-body
          ion-icon.return-icon(name="arrow-back", @click="signUpHandler")
          .form-group.inner-addon
            label E-mail
            b-input(size="sm", v-model="signUpUser.email" type="email")
          .form-group.inner-addon
            label Senha
            b-input(size="sm", type="password", v-model="signUpUser.password")
          .form-group.inner-addon
            label Confirmar senha
            b-input(size="sm", type="password", v-model="passwordToConfirm")
          b-button.btn.btn-primary.btn-block(@click="registerUser") Criar conta
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
  height: 40%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $c-red-default;
}

.container-header img {
  margin-bottom: 60px;
}

.container-body {
  padding-left: 5px;
  padding-right: 5px;
}

.form-signin, .form-signup {
  max-width: 450px;
  margin: -70px auto 10px;
}

.form-signin-body, .form-signup-body {
  padding: 3rem;
  background: #ffffff;
  box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.16);
}

.form-signin-body .form-group, .form-signup-body .form-group {
  margin-bottom: 5px;
}

.form-signin-body .btn.btn-primary, .form-signup-body .btn.btn-primary {
  color: $c-white;
  background-color: $c-red-default;
  margin-top: 2rem;
}

.form-signin-body .btn.btn-primary {
  margin-bottom: 2rem;
}

.form-signin-body .btn.btn-primary:hover, .form-signin-body .btn.btn-primary:focus {
  background-color: #b23f50;
}

.form-signup-body .btn.btn-primary:hover, .form-signup-body .btn.btn-primary:focus {
  background-color: #b23f50;
}

.input-wrapper {
  width: 100%;
  position: relative;
}

.sign-up--wrapper {
  font-size: $f-size-text;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sign-up--button {
  margin-left: 0.2rem;
  color: $c-red-default;
  font-weight: $f-semibold;
  padding: 0;
  font-size: $f-size-text;

  &:hover {
    text-decoration: underline;
  }
}

.return-icon {
  font-size: 1.5rem;
  margin-bottom: 1rem;

  &:hover {
    cursor: pointer;
  }
}

.inner-addon {
  position: relative;
}

.align-middle {
  vertical-align: middle;
}
</style>

<script lang="ts" src="./login.ts"></script>
