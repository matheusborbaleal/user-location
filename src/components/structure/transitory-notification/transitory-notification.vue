<template lang="pug">
</template>

<script lang="ts">
import Vue from 'vue';
import { emmitNotification } from '../../ui/notification/emmit-notifications/notification';
import { INotification } from '../../../interfaces/inotification';

export default Vue.extend({
  data() {
    return { unsub: {} as any };
  },
  created() {
    this.unsub = (this.$store as any).subscribeAction((action: any) => {
      let notificationBody = {} as INotification;
      if (['newNotification'].indexOf(action.type) > -1) {
        notificationBody = action.payload.notification;
        emmitNotification.emit(notificationBody);
      }
    });
  },
  destroyed() {
    this.unsub();
  },
});
</script>
