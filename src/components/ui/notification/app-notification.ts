import { TypeNotification, NotificationInterface } from '../../../interfaces/inotification';
import { emmitNotification } from './emmit-notifications/notification';
import * as Push from 'push.js';
import { Component, Vue } from 'vue-property-decorator';

interface ConfigNotification {
  duration?: number;
  title?: string;
  message?: string;
  type?: string;
  icon?: string;
}

@Component({
  name: 'app-notification',
})

export default class AppNotification extends Vue {
  activeWindow = true;
  // eslint-disable-next-line
  unsubBlur = {} as any;
  // eslint-disable-next-line
  unsubFocus = {} as any;

  get notificationSupport(): boolean {
    return (('Notification' in window));
  }
  get notificationPermission(): boolean {
    // eslint-disable-next-line
    return (this.notificationSupport && ((Notification as any).permission !== 'denied' || (Notification as any).permission === 'default'));
  }
  get useNotification(): boolean {
    return (this.notificationSupport && this.notificationPermission && !this.activeWindow);
  }

  defaultType(): ConfigNotification {
    return {
      icon: 'static/img/notification/detalhes.png'
      , type: 'default',
    };
  }
  sucessType(): ConfigNotification {
    return {
      icon: 'static/img/notification/confirmar.png'
      , type: 'sucess',
    };
  }

  warningType(): ConfigNotification {
    return {
      icon: 'static/img/notification/alerta.png'
      , type: 'warning',
    };
  }

  dangerType(): ConfigNotification {
    return {
      icon: 'static/img/notification/erro.png'
      , type: 'error'
      , duration: 5000,
    };
  }

  infoType(): ConfigNotification {
    return {
      icon: 'static/img/notification/detalhes.png'
      , type: 'info',
    };
  }

  blurHandler() {
    this.activeWindow = false;
  }

  focusHandler() {
    this.activeWindow = true;
  }

  mounted() {
    this.unsubBlur = this.blurHandler.bind(this);
    this.unsubFocus = this.focusHandler.bind(this);
    window.addEventListener('blur', this.unsubBlur);
    window.addEventListener('focus', this.unsubFocus);
  }
  destroyed() {
    emmitNotification.unsubscribeAll();
    window.removeEventListener('blur', this.unsubBlur, false);
    window.removeEventListener('focus', this.unsubFocus, false);
  }
  created() {
    emmitNotification.subscribe((notif: NotificationInterface) => {

      let selectedType;

      switch (notif.type) {
        case TypeNotification.SUCCESS:
          selectedType = this.sucessType();
          break;
        case TypeNotification.WARNING:
          selectedType = this.warningType();
          break;
        case TypeNotification.DANGER:
          selectedType = this.dangerType();
          break;
        case TypeNotification.INFO:
          selectedType = this.infoType();
          break;

        default:
          selectedType = this.defaultType();
          break;
      }

      if (notif.type === TypeNotification.DANGER) {
        selectedType = this.dangerType();
      }
      delete notif.type;
      const config: NotificationInterface = Object.assign({}, selectedType, notif);

      if (this.useNotification) {
        // eslint-disable-next-line
        (Push as any).create(config.title, {
          duration: config.duration,
          body: config.message,
          icon: config.icon,
          timeout: config.duration,
        });
      } else {
        this.$notify({
          group: 'appNotifications',
          title: config.title,
          text: config.message,
          type: config.type,
          duration: config.duration,
          // eslint-disable-next-line
        } as any);
      }
    });
  }
}
