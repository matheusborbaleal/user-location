<template lang="pug">
li.comment-list-item
  .comment-header
    .avatar
      img.user-photo(:src="avaliation.avatar", alt="User profile")
    .user-info
      .avaliation
        b-icon(
          icon="star-fill",
          v-for="index in Math.round(avaliation.rate)",
          :key="index"
        )
      span: strong {{ avaliation.user }}
      span.time Avaliado em {{ avaliation.time }}

  span.comment {{ avaliation.message }}
</template>

<script lang="ts" src="./location-info-avaliation.ts">
</script>

<style lang="stylus" scoped>
.comment-list-item {
  margin-bottom: 1.5rem;
  border: 1px solid $c-white;
  padding: 0.8rem;
  margin-right: 1rem;
}

.comment-header {
  display: flex;
  margin-bottom: 0.8rem;
  align-items: center;
}

.user-photo {
  width: 4rem;
  margin-right: 0.8rem;
}

.user-info {
  display: flex;
  flex-direction: column;
}

.time {
  font-size: $f-size-description;;
  margin-right: 1rem;
}

.comment {
  font-size: $f-size-text;
}

.avaliation {
  font-size: $f-size-text;
}
</style>