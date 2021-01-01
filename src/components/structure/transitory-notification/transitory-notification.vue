<template lang="pug">
</template>

<script lang="ts">
import Vue from 'vue';
import { emmitNotification } from '../../ui/notification/emmit-notifications/notification';
import { NotificationInterface } from '../../../interfaces/inotification';

export default Vue.extend({
  data() {
    // eslint-disable-next-line
    return { unsub: {} as any };
  },
  created() {
    // eslint-disable-next-line
    this.unsub = (this.$store as any).subscribeAction((action: any) => {
      let notificationBody = {} as NotificationInterface;
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
