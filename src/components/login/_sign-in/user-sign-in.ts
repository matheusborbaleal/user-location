import { TypeNotification } from '@/interfaces/inotification';
import { ISimpleUser, IUser } from '@/interfaces/iuser';
import { emmitNewNotification } from '@/store/notifications/actions';
import { login } from '@/store/users/actions';
import { authUser, mountLoggedUser } from '@/store/users/mutations';
import { Vue, Component } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { users } from '../../../store/users/types';

@Component({
    name: 'user-sign-in',
    computed: {
        ...mapGetters({
            users
        })
    },
})

export default class UserSignIn extends Vue {

    public users: IUser[];

    signInUser: ISimpleUser = {
        email: '',
        password: ''
    };

    clearInput() {
        this.signInUser = {
            email: '',
            password: '',
        };
    }

    signIn() {
        this.$store.dispatch(login(this.signInUser))
            .then((res) => {
                this.$store.commit(authUser(res.token));
                this.setLoggedUser();
                this.$router.push({ name: 'LocationDashboard' });
            })
            .catch((err) => {
                this.clearInput();
                const validatedError = this.signInValidator(err);
                this.$store.dispatch(emmitNewNotification({
                    title: 'Erro',
                    message: validatedError ? validatedError : err,
                    type: TypeNotification.DANGER,
                }));
            });
    }

    signInValidator(error: string) {

        switch (error) {
            case 'Missing email or username':
                return 'É necessário preencher o email do usuário!';
            case 'Missing password':
                return 'É necessário preencher o campo de senha!';
            case 'user not found':
                return 'Usuário não encontrado!';
            default:
                return '';
        }

    }

    setLoggedUser() {
        this.users.find((user: IUser) => {
            if (user.email === this.signInUser.email.trim()) {
                this.$store.commit(mountLoggedUser(user));
                localStorage.setItem('user', JSON.stringify(user));
            }
        });
    }

    signUpHandler() {
        this.$emit('sign-up-form-handler');
    }

}