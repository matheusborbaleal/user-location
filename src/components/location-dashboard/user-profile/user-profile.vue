<template lang="pug">
.logged-user(v-b-toggle="'user-profile-sidebar'")
  img.user-photo(:src="currentUser.avatar", alt="User profile")
  .user-info
    span.user-name {{ currentUser.first_name }} {{ currentUser.last_name }}
    span.user-email {{ currentUser.email }}
</template>

<script lang="ts" src="./user-profile.ts">
</script>

<style lang="stylus">
.logged-user {
  display: flex;
  align-items: center;
  color: $c-white;
  padding: 3rem 0rem 0rem 1.8rem;
  outline: none;

  &:hover {
    cursor: pointer;
  }
}

.user-info {
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
}

.user-name {
  font-weight: $f-semibold;
}

.user-email {
  font-size: $f-size-text;
}

.user-photo {
  width: 5rem;
  border-radius: 100%;
}
</style>