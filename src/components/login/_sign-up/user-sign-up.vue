<template lang="pug">
.form-signup-body(@keyup.enter="registerUser")
  ion-icon.return-icon(name="arrow-back", @click="signUpHandler")
  .form-group.inner-addon
    label E-mail
    b-input(size="sm", v-model="signUpUser.email", type="email")
  .form-group.inner-addon
    label Senha
    b-input(size="sm", type="password", v-model="signUpUser.password")
  .form-group.inner-addon
    label Confirmar senha
    b-input(size="sm", type="password", v-model="passwordToConfirm")
  b-button.btn.btn-primary.btn-block(@click="registerUser") Criar conta
</template>

<script lang="ts" src="./user-sign-up.ts">
</script>

<style lang="stylus" scoped>
.form-signup {
  max-width: 450px;
  margin: -140px auto 10px;
}

.form-signup-body {
  padding: 3rem;
  background: #ffffff;
  box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.16);
}

.form-signup-body .form-group {
  margin-bottom: 5px;
}

.form-signup-body .btn.btn-primary {
  color: $c-white;
  background-color: $c-red-default;
  margin-top: 2rem;
}

.form-signup-body .btn.btn-primary:hover, .form-signup-body .btn.btn-primary:focus {
  background-color: #b23f50;
}

.return-icon {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: $c-red-default;

  &:hover {
    cursor: pointer;
  }
}

.inner-addon {
  position: relative;
}
</style>