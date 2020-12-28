import { Vue, Component } from 'vue-property-decorator';

@Component({
    name: 'pg-location-dashboard',
    components: {
        LocationDashboard: () => import('../../components/location-dashboard/location-dashboard.vue')
    }
})

export default class PgLocationDashboard extends Vue {

}