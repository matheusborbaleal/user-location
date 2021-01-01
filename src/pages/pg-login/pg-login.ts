import { logoutUser } from '@/store/users/mutations';
import { Vue, Component } from 'vue-property-decorator';

@Component({
    name: 'pg-login',
    components: {
        login: () => import('../../components/login/login.vue')
    }
})

export default class PgLogin extends Vue {

    mounted() {
        this.$store.commit(logoutUser());
    }

}