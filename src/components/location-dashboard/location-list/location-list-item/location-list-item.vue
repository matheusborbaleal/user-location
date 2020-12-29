<template lang="pug">
b-list-group-item.content(v-b-toggle="'location-info-sidebar'")
  .item
    .item-description
      .item-name
        span {{ location.name }}
      .item-adress
        b-icon(icon="geo-alt-fill")
        span.text {{ location.vicinity }}
      .item-rating
        b-icon(icon="star-half")
        span.text {{ location.rating }}
      .item-avaliations
        b-icon(icon="people-fill")
        span.text {{ location.user_ratings_total }} avaliações
    .separator
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
  outline: none;

  &:hover {
    cursor: pointer;
  }
}

.item {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.item-description {
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
}

.item-adress, .item-rating, .item-avaliations {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.item-name {
  font-weight: $f-semibold;
  margin-bottom: 0.5rem;
}

.text {
  margin-left: 0.3rem;
  font-size: 0.9rem;
}

.separator {
  border-top: 1px solid #dee2e6 !important;
  margin-top: 1.4rem;
}
</style>