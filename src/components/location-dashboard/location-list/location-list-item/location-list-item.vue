<template lang="pug">
b-list-group-item.content
  .item-description
    .item-name
      span {{ location.name }}
    .item-adress
      ion-icon(name="location-outline")
      span.text {{ location.vicinity }}
    .item-rating
      ion-icon(name="star-half-outline")
      span.text {{ location.rating }}
    .item-avaliations
      ion-icon(name="people-outline")
      span.text {{ location.user_ratings_total }} avaliações
</template>

<script lang="ts" src="./location-list-item.ts">
</script>

<style lang="stylus">
.content {
  display: flex;
  border: none;
  background: none;
  color: white;
  font-size: 1rem;
}

.item-description {
  display: flex;
  flex-direction: column;
}

.item-adress, .item-rating, .item-avaliations {
  display: flex;
  align-items: center;
}

.item-name {
  font-weight: $f-semibold;
  margin-bottom: 0.5rem;
}

.text {
  margin-left: 0.3rem;
  font-size: 0.9rem;
}
</style>