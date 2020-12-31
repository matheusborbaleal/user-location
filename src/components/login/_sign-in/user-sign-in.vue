<template lang="pug">
.form-signin-body(@keyup.enter="signIn")
  .form-group.inner-addon
    label E-mail
    b-input(size="sm", v-model="signInUser.email", type="email")
  .form-group.inner-addon
    label Senha
    b-input(size="sm", type="password", v-model="signInUser.password")
  b-button#submit.btn.btn-primary.btn-block(@click="signIn") Entrar
  .sign-up--wrapper
    span Não tem uma conta?
    b-button.sign-up--button(variant="flat btn-sm" @click="signUpHandler") Crie uma agora.
</template>
<script lang="ts" src="./user-sign-in.ts">
</script>

<style lang="stylus" scoped>
.form-signin-body {
  padding: 3rem;
  background: #ffffff;
  box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.16);
}

.form-signin-body .form-group {
  margin-bottom: 5px;
}

.form-signin-body .btn.btn-primary {
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

.inner-addon {
  position: relative;
}

.sign-up--button {
  margin-left: 0.2rem;
  color: $c-red-default;
  font-weight: $f-semibold;
  padding: 0;
  font-size: 0.8rem

  &:hover {
    text-decoration: underline;
  }
}

.sign-up--wrapper {
  font-size: 0.8rem
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>