import { Component, Vue } from 'vue-property-decorator';
import TransitoryNotification from './components/structure/transitory-notification/transitory-notification.vue';
import AppNotification from './components/ui/notification/app-notification.vue';

@Component({
    name: 'app',
    components: {
        TransitoryNotification,
        AppNotification
    }
})

export default class App extends Vue {

}