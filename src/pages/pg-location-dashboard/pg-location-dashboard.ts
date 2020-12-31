import { logoutUser } from '@/store/users/mutations';
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'pg-location-dashboard',
    components: {
        LocationDashboard: () => import('../../components/location-dashboard/location-dashboard.vue')
    },
})

export default class PgLocationDashboard extends Vue {

    get isAuthenticated() {
        return localStorage.getItem('user-token') ? true : false;
    }

    mounted() {
        if (!this.isAuthenticated) {
            this.$store.commit(logoutUser());
            this.$router.push({ name: 'Login' });
        }
    }

}