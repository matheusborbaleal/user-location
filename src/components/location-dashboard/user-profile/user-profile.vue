<template lang="pug">
.logged-user(v-b-toggle="'user-profile-sidebar'")
  img.user-photo(:src="currentUser.avatar", alt="User profile")
  .user-info
    span.user-name(
      :title="`${currentUser.first_name} ${currentUser.last_name}`"
    ) {{ currentUser.first_name }} {{ currentUser.last_name }}
    span.user-email {{ currentUser.email }}
</template>

<script lang="ts" src="./user-profile.ts">
</script>

<style lang="stylus" scoped>
.logged-user {
  display: flex;
  align-items: center;
  color: $c-white;
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
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 17rem;
}

.user-email {
  font-size: $f-size-text;
}

.user-photo {
  width: 5rem;
  border-radius: 100%;
}
</style>