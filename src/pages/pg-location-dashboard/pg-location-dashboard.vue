<template lang="pug">
.location-page--wrapper(v-if="isAuthenticated")
  location-dashboard
</template>

<script lang="ts" src="./pg-location-dashboard.ts">
</script>

<style lang="stylus" scoped>
.location-page--wrapper{
  width: 100%;
  height : 100vh;
  display: grid;
  align-items: center;
}
</style>