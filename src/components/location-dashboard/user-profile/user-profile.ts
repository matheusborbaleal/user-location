import { Vue, Component } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { loggedUser } from '../../../store/users/types';

@Component({
    name: 'user-profile',
    computed: {
        ...mapGetters({
            loggedUser
        })
    },
})

export default class UserProfile extends Vue {

    public loggedUser: any;

    get currentUser() {
        if (Object.keys(this.loggedUser).length) {
            return this.loggedUser;
        } else {
            const user = JSON.parse(localStorage.getItem('user') as string);
            return user;
        }
    }

}