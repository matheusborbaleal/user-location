<template lang="pug">
  b-list-group.list
    transition-group(name="flip-list")
      location-list-item(
        v-for="location in nearbyLocations",
        :location="location",
        :key="location.place_id"
      )
</template>

<script lang="ts" src="./location-list.ts">
</script>

<style lang="stylus" scoped>
</style>