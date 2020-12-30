<template lang="pug">
b-sidebar#location-info-sidebar(shadow)
  .location-info(v-if="isPlaceSelected")
    .location-info--header
      .name
        span {{ selectedPlace.name }}
      .is-open
        span(v-if="selectedPlace.opening_hours") {{ selectedPlace.opening_hours.open_now ? 'Aberto agora' : 'Fechado agora' }}
    .location-info--body
      .place-rating
        b-form-rating(
          v-model="placeRate",
          variant="danger",
          precision="1",
          show-value,
          show-value-max,
          size="sm"
        )
      .comment-textarea
        b-form-textarea(
          v-model="placeAvaliation",
          placeholder="Deixe sua avaliação...",
          size="sm",
          rows="5"
        )
      .comment-actions
        b-button.publish--button(
          variant="flat semibold btn-sm",
          size="sm",
          @click="publishAvaliation"
        ) PUBLICAR
      .list-wrapper
        label.label-list Avaliações
        ul.comments-list
          transition-group(name="flip-list")
            location-info-avaliation(
              v-for="(avaliation, index) in avaliations",
              :key="`${index}-component`",
              :avaliation="avaliation"
            )
</template>

<script lang="ts" src="./location-info-sidebar.ts">
</script>

<style lang="stylus" scoped>
.name {
  display: flex;
  font-size: 1.6rem;
  justify-content: center;
  font-weight: $f-semibold;
  margin-bottom: 0.5rem;
}

.place-rating {
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.is-open {
  display: flex;
  justify-content: center;
}

.location-info--body {
  margin-top: 1rem;
}

.comments-list {
  max-height: 40vh;
  padding: 0;
  list-style: none;
  overflow: hidden auto;
}

.list-wrapper {
  margin-top: 0.5rem;
}

.label-list {
  font-size: 1.1rem;
  font-weight: 700;
}

.comment-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
}

.publish--button {
  color: $c-red-default;
  background: $c-white;
  font-weight: $f-semibold;
  border: none;
  margin-left: 0.5rem;
  outline: none;

  &:hover, &:active, &:focus {
    background: $c-white;
    color: $c-red-default;
    border: none;
  }
}

.flip-list-enter {
  opacity: 0;
  transform: translateY(-80px);
}
</style>