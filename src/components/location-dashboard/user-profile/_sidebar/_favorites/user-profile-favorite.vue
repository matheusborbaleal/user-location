<template lang="pug">
.favorite
  b-icon(icon="star-fill")
  span.local-name {{ favorite.name }}
</template>

<script lang="ts" src="./user-profile-favorite.ts">
</script>

<style lang="stylus" scoped>
.favorite {
  font-size: 0.9rem;
  margin-bottom: 0.7rem;
}

.local-name {
  margin-left: 1rem;
}
</style>