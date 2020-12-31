<template lang="pug">
.location-dashboard--wrapper
  user-profile-sidebar
  location-info-sidebar
  .location-sidebar
    .header
      .user
        user-profile
        .logout-button(title="Logout")
          b-icon(icon="box-arrow-left", @click="logout")
      .project--logo
        img.logo(src="../../assets/img/white-logo.svg", alt="Logo branca")
    .local--types-list
      b-form-select(
        v-model="selectedLocalType",
        :options="localTypes",
        @change="getCurrentLocation"
      )
    .local--list
      location-list
  .location-map
    #map
</template>

<script lang="ts" src="./location-dashboard.ts">
</script>

<style lang="stylus" scoped>
.location-dashboard--wrapper {
  width: 100%;
  height: auto;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 0rem 0rem 1.8rem;
}

.user {
  display: flex;
  align-items: center;
}

.logout-button {
  font-size: 1.4rem;
  margin-left: 1.5rem;
  color: $c-white;

  &:hover {
    cursor: pointer;
  }
}

.local--types-list {
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-left: 1.8rem;
}

.logo {
  margin-right: 0.5rem;
  width: 60px;
}

.local--list {
  height: 60vh;
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
  background: $c-red-default;
  height: 100vh;
  padding-right: 2rem;
  flex: 40%;
}

#map {
  height: 100vh;
}
</style>