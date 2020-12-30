<template lang="pug">
b-list-group-item.content(v-b-toggle="'location-info-sidebar'" @click="choosePlace(location)")
  .item
    .item-wrapper
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
      .favorite-button
        b-icon(icon="star" @click="favoritePlace(location)")
        //- b-icon(icon="star-fill")
    .separator
</template>

<script lang="ts" src="./location-list-item.ts">
</script>

<style lang="stylus" scoped>

.list-group-item {
  padding: 0rem;
}
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
  width: 100%
}

.item-wrapper {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding-right: 1.2rem;
}

.item-description {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem 0rem 1rem 1.8rem;
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
  align-self: center;
  border-top: 1px solid #dee2e6 !important;
  width: 96%;
}

.favorite-button {
  font-size: 1.3rem;
}


</style>