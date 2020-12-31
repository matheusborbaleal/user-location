import { ITypeNotification } from '@/interfaces/inotification';
import { emmitNewNotification } from '@/store/notifications/actions';
import { mountLoggedUser } from '@/store/users/mutations';
import { Vue, Component } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { loggedUser } from '../../../../store/users/types';

@Component({
    name: 'user-profile-sidebar',
    computed: {
        ...mapGetters({
            loggedUser
        })
    },
    components: {
        UserProfileFavorite: () => import('./_favorites/user-profile-favorite.vue')
    }
})

export default class UserProfileSidebar extends Vue {

    public loggedUser: any;

    userName = '';
    userLastName = '';
    userEmail = '';

    favorites = JSON.parse(localStorage.getItem('favorite-places') || '[]');

    get currentUser() {
        if (Object.keys(this.loggedUser).length) {
            return this.loggedUser;
        } else {
            const user = JSON.parse(localStorage.getItem('user') as string);
            return user;
        }
    }

    updateProfile() {

        const userToUpdate = {
            avatar: this.currentUser.avatar,
            'first_name': this.userName,
            'last_name': this.userLastName,
            email: this.userEmail
        }

        this.$store.commit(mountLoggedUser(userToUpdate))
        localStorage.setItem('user', JSON.stringify(userToUpdate));
        this.$store.dispatch(emmitNewNotification({
            title: 'Sucesso',
            message: 'Usuário atualizado com sucesso!',
            type: ITypeNotification.SUCCESS,
        }));

        this.$root.$emit('bv::toggle::collapse', 'user-profile-sidebar')
    }

    mounted() {
        this.userName = this.currentUser.first_name;
        this.userLastName = this.currentUser.last_name;
        this.userEmail = this.currentUser.email;
    }

}