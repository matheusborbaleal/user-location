import Vue from 'vue';

declare module 'vue/types/vue' {
  // Global properties can be declared
  // on the `VueConstructor` interface
  interface Vue {
    $notify: (options: NotificationOptions | string) => void; 
  }
}