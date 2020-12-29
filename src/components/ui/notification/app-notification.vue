<template>
  <notifications group="appNotifications" position="bottom right" />
</template>

<style lang="stylus">
.vue-notification {

  &.default {
    background: $c-brand-primary;
    border-left-color: $c-dark-primary;
  }

  &.sucess {
    background: $c-brand-success;
    border-left-color: $c-dark-success;
  }

  &.warning {
    background: #E59C00;
    border-left-color: $c-brand-warning;
  }

  &.error {
    background: $c-brand-error;
    border-left-color: $c-dark-error;
  }

  &.info {
    background: $c-brand-primary;
    border-left-color: $c-dark-primary;
  }
}
</style>


<script lang="ts" src="./app-notification.ts">
</script>
