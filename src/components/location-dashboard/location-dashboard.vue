<template lang="pug">
.location-dashboard--wrapper
  .location-sidebar
    .list--header
      .logged-user
        img.user-photo(:src="currentUser.avatar", alt="User profile")
        .user-info
          span.user-name {{ currentUser.first_name }} {{ currentUser.last_name }}
          span.user-email {{ currentUser.email }}
      .project--logo
        img.logo(src="../../assets/img/white-logo.svg", alt="Logo branca")
    .list--body
      location-list
  .location-map
    #map
</template>

<script lang="ts" src="./location-dashboard.ts">
</script>

<style lang="stylus">
.location-dashboard--wrapper {
  width: 100%;
  height: auto;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
}

.location-sidebar {
  background: $c-red-default;
  width: 35%;
  height: 100vh;
  padding-right: 0.3rem;
}

.list--header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.logged-user {
  display: flex;
  align-items: center;
  color: $c-white;
  padding: 3rem 0rem 0rem 1.8rem;

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

.logo {
  margin-right: 2rem;
  width: 60px;
}

.list--body {
  margin-top: 3rem;
  height: 70vh;
  overflow: auto;
}

.location-map, .location-sidebar {
  width: 100%;
  height: auto;
}

.location-map {
  flex: 60%;
}

.location-sidebar {
  flex: 40%;
}

#map {
  height: 100vh;
}
</style>