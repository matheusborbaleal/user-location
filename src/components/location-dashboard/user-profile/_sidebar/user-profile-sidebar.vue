<template lang="pug">
b-sidebar#user-profile-sidebar(shadow) 
  .profile
    .profile-photo
      img.user-photo(:src="currentUser.avatar", alt="User profile")
    .profile-info
      .profile-form--item
        label Nome
        b-form-input(size="sm", v-model="userName")
      .profile-form--item
        label Sobrenome
        b-form-input(size="sm", v-model="userLastName")
      .profile-form--item
        label E-mail
        b-form-input(size="sm", v-model="userEmail")
    .profile-actions
      b-button.save--button(
        variant="flat semibold btn-sm",
        size="sm",
        @click="updateProfile"
      ) SALVAR
    .favorites
      label.favorites--labels Favoritos
      .favorites-list
        user-profile-favorite(
          v-for="(favorite, index) in favorites",
          :key="index"
          :index="index",
          :favorite="favorite"
        )
</template>

<script lang="ts" src="./user-profile-sidebar.ts">
</script>

<style lang="stylus">
@media screen and (max-width: 1016px) {
  .b-sidebar {
    width: 100% !important;
  }
}

.b-sidebar {
  width: 40%;
}

.b-sidebar-header, .b-sidebar-body {
  color: $c-white;
  background-color: $c-red-default;
  padding: 1rem 3rem 1rem 3rem !important;
}

.profile-photo {
  width: 100%;
  display: flex;
  justify-content: center;
}

.b-sidebar-body {
  padding-top: 0rem !important;
}

.b-sidebar-header {
  padding-right: 2rem !important;
}

.close {
  font-size: 2rem !important;
  color: $c-white !important;
  opacity: 1 !important;
}

.user-photo {
  width: 8rem;
  border-radius: 100%;
}

.profile-info {
  margin-top: 2rem;
}

.profile-form--item {
  margin-top: 0.5rem;
}

.profile-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5rem;
}

.favorites--labels {
  font-size: 1rem;
  font-weight: $f-semibold;
}

.favorites-list {
  overflow: auto;
  height: 24vh;
}

.save--button {
  color: $c-red-default;
  background: $c-white;
  font-weight: $f-semibold;
  border: none;
  margin-left: 0.5rem;
  outline: none;

  &:hover, &:active, &:focus {
    background: $c-white;
    color: $c-red-default;
    border: none;
  }
}
</style>